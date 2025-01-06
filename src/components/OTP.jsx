import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function OTP() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="w-12 h-12 rounded-lg mr-3 bg-white dark:bg-black"
          />
          <InputOTPSlot
            index={1}
            className="w-12 h-12 rounded-lg mr-3 bg-white dark:bg-black"
          />
          <InputOTPSlot
            index={2}
            className="w-12 h-12 rounded-lg mr-3 bg-white dark:bg-black"
          />
          <InputOTPSlot
            index={3}
            className="w-12 h-12 rounded-lg mr-3 bg-white dark:bg-black"
          />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
