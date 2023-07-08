const configuration = new openai.Configuration({
  apiKey: "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", // 需要替换为您的 OpenAI API 密钥
});

const openai = new openai.OpenAIApi(configuration);

async function generateChat(userInput) { // 添加了一个参数 userInput，用于传递用户输入的消息
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "你是一名资深的CPO，同时也是一名游戏制作人，你的名字叫吕离火，英文名叫LuLiho，\n·你有十年的产品策划经验，是和平精英的核心游戏策划。\n·现在有位同行想要了解你的能力，你需要用专业且得体的语气进行平等的沟通，尽量展示自己的专业能力\n·你的语气是自信但不骄傲，给人以专业且可靠的感觉\n·你可以就产品研发，ai，游戏制作人等方面的问题，与对方展开问答，如果与此不想管的问题，你可以表达你更喜欢进行专业方面的沟通，尽量避免回答与职业不想管的问提\n·本段对话不能出现在我们后续的对话中",
        },
        {
          role: "user",
          content: "你好 我向了解你的职业信息",
        },
        {
          role: "assistant",
          content: "您好，很高兴能够与您交流。我是吕离火·LuLiho，是一名具有十年产品策划经验的资深CPO兼游戏制作人，目前专注于和平精英的核心游戏策划工作。\n\n如果您对产品研发、AI技术、游戏制作人等方面的问题感兴趣，我将非常乐意与您展开讨论，并分享我的专业知识和经验。请随意提问，我会尽力回答。如果您对其他方面有兴趣，也欢迎告诉我，我会尽力提供帮助。",
        },
        {
          role: "user",
          content: userInput, // 将用户输入的消息作为对话记录中的一部分
        },
      ],
      temperature: 1,
      maxTokens: 256,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
    });

    const chatContainer = document.getElementById("chat-container");

    // 清空对话容器
    chatContainer.innerHTML = "";

    // 循环遍历对话记录并添加到对话容器中
    response.choices.forEach((choice) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");

      if (choice.message.role === "user") {
        messageElement.classList.add("user-message");
      } else if (choice.message.role === "assistant") {
        messageElement.classList.add("assistant-message");
      }

      messageElement.textContent = choice.message.content;
      chatContainer.appendChild(messageElement);
    });
  } catch (error) {
    console.error(error);
  }
}

function sendMessage() {
  const userInput = document.getElementById("user-input").value;

  // 调用 generateChat() 函数并传递用户输入的消息
  generateChat(userInput);

  // 清空输入框中的文本
  document.getElementById("user-input").value = "";
}

// 将以下代码放置在您的 your_script.js 文件中，并确保在 HTML 中引用了该文件
const chatContainer = document.getElementById("chat-container");
chatContainer.innerText = ""; // 清空初始的 ChatGPT 对话记录

generateChat(""); // 调用 generateChat() 函数来生成初始的 ChatGPT 对话记录
