import * as React from 'react';

export default function useCountdown(targetDate: Date) {
  const targetDateSinceEpoch = targetDate.getTime();

  const [countdown, setCountdown] = React.useState(
    targetDateSinceEpoch - new Date().getTime()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(targetDateSinceEpoch - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateSinceEpoch]);

  return getReturnValues(countdown);
}

function getReturnValues(countdown: number) {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}
