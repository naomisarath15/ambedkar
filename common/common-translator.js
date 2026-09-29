const GoogleVoiceTranslator = {
  languages: [
    { code: 'en', name: 'English', bcp47: 'en-IN' },
    { code: 'hi', name: 'Hindi (हिन्दी)', bcp47: 'hi-IN' },
    { code: 'ta', name: 'Tamil (தமிழ்)', bcp47: 'ta-IN' },
    { code: 'mr', name: 'Marathi (मराठी)', bcp47: 'mr-IN' },
    { code: 'te', name: 'Telugu (తెలుగు)', bcp47: 'te-IN' }
  ],

  currentAudio: null,

  translateText: async function (text, targetLang = 'hi') {
    if (targetLang === 'en') return text;
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const data = await res.json();
      return data[0].map(chunk => chunk[0]).join('');
    } catch (err) {
      console.warn("Translation fallback", err);
      return text;
    }
  },

  speakWithGoogle: async function (text, targetLang = 'hi') {
    this.stop();
    const translatedText = await this.translateText(text, targetLang);
    try {
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${targetLang}&client=tw-ob&q=${encodeURIComponent(translatedText)}`;
      this.currentAudio = new Audio(ttsUrl);
      const playPromise = this.currentAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => this.nativeFallbackSpeak(translatedText, targetLang));
      }
    } catch (e) {
      this.nativeFallbackSpeak(translatedText, targetLang);
    }
    return translatedText;
  },

  nativeFallbackSpeak: function (text, targetLang) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const matched = this.languages.find(l => l.code === targetLang) || { bcp47: 'en-IN' };
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = matched.bcp47;
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  },

  stop: function () {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
};