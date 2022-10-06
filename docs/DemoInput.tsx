import * as React from 'react';

type DemoInputProps = {
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const DemoInput = React.forwardRef<HTMLInputElement, DemoInputProps>(
  ({ onChange, ...props }, ref) => (
    <div style={{ maxWidth: 300 }}>
      <input
        ref={ref}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          // Some sort of side effect
          const inputToUpperCase = e.currentTarget.value.toUpperCase();

          onChange(inputToUpperCase);
        }}
        {...props}
      />
    </div>
  )
);
