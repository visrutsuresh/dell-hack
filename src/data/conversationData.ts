export interface ChatMessage {
  id: string;
  sender: 'youth' | 'sw';
  text: string;
}

export interface YouthConversation {
  youthId: string;
  name: string;
  lastActive: string;
  currentState: string;
  currentStateDetail: string;
  suggestedApproach: string;
  messages: ChatMessage[];
  isTyping?: boolean;
}

export const CONVERSATION_DATA: Record<string, YouthConversation> = {
  '1': {
    youthId: '1',
    name: 'Alex M.',
    lastActive: '2m ago',
    currentState: 'Receptive',
    currentStateDetail: 'Pattern indicates stabilization after recent spike.',
    suggestedApproach:
      'Validate feelings of isolation. Avoid direct confrontation about sleep schedule.',
    messages: [
      {
        id: '1-1',
        sender: 'youth',
        text: "I don't know why I'm even awake right now. It just feels like everything is too loud.",
      },
      {
        id: '1-2',
        sender: 'sw',
        text: "It sounds like you're feeling really overwhelmed, Alex. \"Loud\" is a heavy way to feel when it's quiet outside.",
      },
      {
        id: '1-3',
        sender: 'youth',
        text: 'Yeah. Like static.',
      },
    ],
    isTyping: true,
  },
  '2': {
    youthId: '2',
    name: 'Sarah K.',
    lastActive: '15m ago',
    currentState: 'Anxious',
    currentStateDetail: 'Elevated stress markers. Recent deadline pressure detected.',
    suggestedApproach:
      'Acknowledge work stress without minimizing. Offer grounding techniques before problem-solving.',
    messages: [
      {
        id: '2-1',
        sender: 'youth',
        text: "I can't stop thinking about everything I have due tomorrow. It's all piling up.",
      },
      {
        id: '2-2',
        sender: 'sw',
        text: "That sounds exhausting, Sarah. When everything piles up at once, it's hard to even know where to start.",
      },
      {
        id: '2-3',
        sender: 'youth',
        text: "Exactly. And then I just freeze and do nothing. Which makes it worse.",
      },
      {
        id: '2-4',
        sender: 'sw',
        text: "That freeze response is really common when we're overwhelmed. What if we just picked one small thing—not everything—just one?",
      },
    ],
  },
  '3': {
    youthId: '3',
    name: 'Jordan T.',
    lastActive: '1h ago',
    currentState: 'Stable',
    currentStateDetail: 'Positive engagement patterns. Healthy circadian rhythm.',
    suggestedApproach:
      'Support continued habits. Light check-in to reinforce healthy routines.',
    messages: [
      {
        id: '3-1',
        sender: 'youth',
        text: "Had a really good run today. Actually made it to the gym for once.",
      },
      {
        id: '3-2',
        sender: 'sw',
        text: "That's great to hear, Jordan! How did it feel after?",
      },
      {
        id: '3-3',
        sender: 'youth',
        text: "Honestly pretty good. Cleared my head a bit. Got plans with friends this weekend too.",
      },
      {
        id: '3-4',
        sender: 'sw',
        text: "Sounds like you're in a good place. Keep doing what's working.",
      },
    ],
  },
  '4': {
    youthId: '4',
    name: 'Casey L.',
    lastActive: '3h ago',
    currentState: 'Engaged',
    currentStateDetail: 'Focused on projects. Motivation indicators strong.',
    suggestedApproach:
      'Encourage balance. Gentle reminders about rest and breaks.',
    messages: [
      {
        id: '4-1',
        sender: 'youth',
        text: "I've been grinding on this project all day. Finally feel like I'm making progress.",
      },
      {
        id: '4-2',
        sender: 'sw',
        text: "That focus sounds productive, Casey. How's your energy holding up?",
      },
      {
        id: '4-3',
        sender: 'youth',
        text: "Pretty good actually. Taking short breaks. Trying to stay on top of things this semester.",
      },
      {
        id: '4-4',
        sender: 'sw',
        text: "Smart approach. Remember it's okay to step away when you need to recharge.",
      },
    ],
  },
  '5': {
    youthId: '5',
    name: 'Riley P.',
    lastActive: '5m ago',
    currentState: 'Withdrawn',
    currentStateDetail: 'Late-night activity spike. Gaming as avoidance pattern.',
    suggestedApproach:
      'Avoid shaming gaming. Explore what the escape is serving. Gentle curiosity.',
    messages: [
      {
        id: '5-1',
        sender: 'youth',
        text: "It's 1am and I'm still online. Can't seem to shut it off.",
      },
      {
        id: '5-2',
        sender: 'sw',
        text: "That happens sometimes—the night stretches and it's hard to step away. What's pulling you in right now?",
      },
      {
        id: '5-3',
        sender: 'youth',
        text: "I don't know. Just... it's better than thinking about other stuff.",
      },
      {
        id: '5-4',
        sender: 'sw',
        text: "The 'other stuff'—is any of it stuff you'd want to talk about, or is the break from it what you need right now?",
      },
    ],
  },
  '6': {
    youthId: '6',
    name: 'Jamie D.',
    lastActive: '1d ago',
    currentState: 'Thriving',
    currentStateDetail: 'Strong social engagement. Balanced activity patterns.',
    suggestedApproach:
      'Affirm healthy patterns. Optional light touchpoint.',
    messages: [
      {
        id: '6-1',
        sender: 'youth',
        text: "Been doing a lot of painting lately. Found a new style I really like.",
      },
      {
        id: '6-2',
        sender: 'sw',
        text: "That's awesome, Jamie! Creative outlets can be so grounding.",
      },
      {
        id: '6-3',
        sender: 'youth',
        text: "Yeah, it helps. Also been hanging out with people more. Feel like I've got a good balance going.",
      },
      {
        id: '6-4',
        sender: 'sw',
        text: "Really glad to hear that. You're doing great.",
      },
    ],
  },
};
