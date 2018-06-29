import { Container } from "inversify";
import { MailConfig, MailService } from "../interface";
import TYPE from "../type";
import { EagletMailService } from "../EagletMailService";
describe("Post", () => {
  // it("sparkpost", async () => {
  //   const myContainer = new Container();
  //   let mailConfig: MailConfig = {
  //     transaction: {
  //       api: "6ca19d3a-aee4-447f-b3b7-ccd2b3983385",
  //       options: {
  //         sandbox: false
  //       }
  //     },
  //     from: "chungchi300@hotmail.com",
  //     type: "sparkpost"
  //   };
  //   myContainer.bind<MailConfig>(TYPE.mailConfig).toConstantValue(mailConfig);

  //   myContainer.bind<MailService>(TYPE.mailService).to(EagletMailService);

  //   const mailService = myContainer.get<MailService>(TYPE.mailService);
  //   console.log()
  //   try {
  //     await mailService.mail({ to: "jeff", html: "ddd", subject: "jeff" });
  //     expect(false).toBe(true);
  //   } catch (err) {
  //     expect(true).toBe(true);
  //   }
  // });
  it("log ", async () => {
    const myContainer = new Container();
    let mailConfig: MailConfig = {
      transaction: {
        api: "6ca19d3a-aee4-447f-b3b7-ccd2b3983385",
        options: {
          sandbox: false
        }
      },
      from: "chungchi300@hotmail.com",
      type: "log"
    };
    myContainer.bind<MailConfig>(TYPE.mailConfig).toConstantValue(mailConfig);

    myContainer.bind<MailService>(TYPE.mailService).to(EagletMailService);

    const mailService = myContainer.get<MailService>(TYPE.mailService);

    // console.log("mail", Object.keys(mailService), mailService.mailConfig);
    // console.log("the mail service", mailService);
    await mailService.mail({ to: "jeff", html: "ddd", subject: "jeff" });
  });
});
