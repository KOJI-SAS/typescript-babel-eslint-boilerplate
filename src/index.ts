import "reflect-metadata";

async function bootstrap() {
  console.log("Welcome");
}

bootstrap().catch(e => {
  console.error(e);
  process.exit(1);
});
