export interface MailOption {
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    html: string;
}
export interface MailConfig {
    transaction: any;
    from: any;
    type: "log" | "sparkpost";
}
export interface MailService {
    readonly mailConfig: MailConfig;
    mail: (mailOptions: MailOption) => Promise<any>;
}
