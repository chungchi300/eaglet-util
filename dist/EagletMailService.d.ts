import "reflect-metadata";
import { MailService, MailOption, MailConfig } from "./interface";
export declare class EagletMailService implements MailService {
    mailConfig: MailConfig;
    mail(mailOptions: MailOption): Promise<void>;
}
