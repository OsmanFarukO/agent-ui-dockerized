"use client";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import useChatActions from "@/hooks/playground/useChatActions";
import { usePlaygroundStore } from "@/stores/PlaygroundStore";

function NewChatButton() {
  const { clearChat } = useChatActions();
  const { messages } = usePlaygroundStore();
  return (
    <Button
      className="z-10 bg-brand hover:bg-brand/80 text-primary font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={clearChat}
      disabled={messages.length === 0}
    >
      <div className="flex items-center gap-2">
        <p>New Chat</p> <PlusIcon />
      </div>
    </Button>
  );
}

export default NewChatButton;
