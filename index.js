//you need jsmacros to run this script, then set Events to Bossbar
const bossBars = World.getBossBars();
if (Object.keys(bossBars).length > 0) {
  const firstBossBar = Array.from(bossBars.values())[0];
  if (firstBossBar && firstBossBar.getName && firstBossBar.getName().getString()) {
    Chat.say(`${firstBossBar.getName().getString()}`);
  }
} else {
  // do nothing
}
// rewrote for errorless experience. pretty cool!
// it also may repeat the name of the bossbar, idk how to fix that yet.
