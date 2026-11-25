// Entry for make.fun's "Have You Tried Turning It Off?" bounty.
//
// One line, under 200 characters, from a hopeless tech support agent to a
// desperate customer: the classic advice, aimed at the wrong device.
// Running this program prints that one line, and nothing else.

/** The support line: the question, the correction, the diagnosis. */
function supportLine(): string {
  const question = "Have you tried turning it off and on again?";
  const correction = "No, not the router, sir — you.";
  const diagnosis = "You've been running for 40 years without a restart.";
  return `${question} ${correction} ${diagnosis}`;
}

console.log(supportLine());
