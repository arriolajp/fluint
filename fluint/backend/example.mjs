const openAIChat = async (userMessage) => {
    try {
      setLoading(true);
      const response = await axios.post('https://api.openai.com/v1/completions', {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
        data: {
          model: 'gpt-3.5-turbo', // or use gpt-4 if available
          prompt: `You are a Spanish language tutor. Please respond to the user's messages ONLY in Spanish. If the user makes any mistakes, kindly correct them. The user message: "${userMessage}"`,
          max_tokens: 150,
          temperature: 0.7,
        },
      });
  
      const botMessage = response.data.choices[0].text.trim();
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { id: Date.now().toString(), text: userMessage, isUser: true },
        { id: (Date.now() + 1).toString(), text: botMessage, isUser: false },
      ]);
      setMessage('');
      setLoading(false);
    } catch (error) {
      console.error('Error fetching response:', error);
      setLoading(false);
    }
  };
  