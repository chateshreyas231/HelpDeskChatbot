export const analyzeNextSteps = (step: number, userResponse: string): { purpose: string, message: string, options?: string[] } => {
    return step === 0
      ? {
          purpose: "specify field",
          message: `Nice to meet you, ${userResponse}! Tell me what do you need to update?`,
          options: ["Phone number", "Alternate Email address", "Both"]
        }
      : step === 1
      ? {
          purpose: "specify experience",
          message:
            "Gotcha!, Let me get those details for you!, But before we begin Did you verified your details before?.",
            options: ["Yes", "No"]
        }
      : step === 2
      ? userResponse ==="Yes"?{
          purpose: "Verification Status",
          message:
            "Oh, that's perfect, Now enter your alernate phone number below!"
            
        }:{          
          purpose: "Verification Status",
        message:
          "It seems like your verification earlier did nott go through, but don't worry!\nLet's try again",
          options: []}
      : step === 3
      ? {
          purpose: "Number update",
          message:
            "Thanks for telling me that. Let's get you alternate email address?"
        }
      : step === 4
      ? {
          purpose: "Alernate email",
          message: "Your phone MFA ans SSPR are updated, Do you need any other assistance?",
          options: ["Yeah!", "No, I'm good"]
        }
      : step === 5
      ? userResponse === "Yeah sure!"
        ? {
            purpose: "tell company info",
            message: "What do you need ?",
            
          }
        : {
            purpose: "bye",
            message: "Alright! Have a nice day :)"
          }
      : {
          purpose: "bye",
          message: "Bye!"
        };
  };