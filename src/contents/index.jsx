// PROCEDURE
import verify from "@/assets/verify.svg";
import secure from "@/assets/secure.svg";
import Id from "@/assets/tax-id.svg";
// FEATURES
import payment from "@/assets/hand.svg";
import returns from "@/assets/returns-filing.svg";
import assesments from "@/assets/assessments.svg";
import tax from "@/assets/tax-consultants.svg";
// INDIVIDAULS
import IndividualImg from "@/assets/individuals.png";
import corporationsImg from "@/assets/consultants.png";
import consultantsImg from "@/assets/corporations.png";

export const Procedure = [
  {
    icon: verify,
    title: "Verify Identify",
    desc: "Verify identity with NIN or BVN.",
  },
  {
    icon: secure,
    title: "Secure Account",
    desc: "Create your secured password..",
  },
  {
    icon: Id,
    title: "Get Taxpayer ID",
    desc: "Get your Tax-Payer ID instantly.",
  },
];

export const Features = [
  {
    icon: payment,
    title: "Instant Payments",
    desc: "Pay your taxes and get receipts Instantly, using the secure e-payment channels.",
  },
  {
    icon: returns,
    title: "Returns Filing",
    desc: "Securely and swiftly file Tax Returns from the comfort of your home.",
  },
  {
    icon: assesments,
    title: "Assessments/E-Alerts",
    desc: "View assessments, instantly receive alerts and notices directly on your mobile.",
  },
  {
    icon: tax,
    title: "Tax Professionals",
    desc: "Securely assign your preferred professional to manage your taxes.",
  },
];

export const Individuals = [
  {
    section: "individuals",
    icon: IndividualImg,
    title: "For Individuals",
    desc: "We have simplified the process to Tax Filing and payments for individuals.",
    text: (
      <p>
        With the SmartAirs mobile app, you are able to easily {""}
        <span className="text-green-600 font-bold">
          Calculate, Pay
        </span> and <span className="text-green-600 font-bold">File </span>
        your taxes.
      </p>
    ),
  },
  {
    section: "corporations",
    icon: consultantsImg,
    title: "For Corporations",
    desc: "Corporations can easily manage company and employee taxes via an intuitive dashboard.",
    text: (
      <p>
        With SmartAirs, you are able to easily {""}
        <span className="text-green-600 font-bold">
          Manage, File and Pay
        </span>{" "}
        your taxes returns.
      </p>
    ),
  },
  {
    section: "consultants",
    icon: corporationsImg,
    title: "Tax Professionals & Consultants",
    desc: "Manage your clients’ taxes efficiently and effectively and ensure their Tax Compliance with ease.",
    text: (
      <p>
        With SmartAirs, Tax Professionals like you, can {""}
        <span className="text-green-600 font-bold">
          File Returns, Prepare & Manage Payroll and Assessments & Payments
        </span>{" "}
        behalf of your clients, all in one place.
      </p>
    ),
  },
];

export const Questions = [
  {
    title: "What is my Tax-Payer ID?",
    desc: "Tax-Payer ID is a unique number attributed to a registered individual/corporate body on the SmartAirs system. This allows users to manage their tax accounts and pay taxes to LIRS nationwide.",
  },
  {
    title: "Can I use both my BVN and NIN to register?",
    desc: "No you can not. You can only use one identification type to register on SmartAirs.",
  },
  {
    title: "How can I pay my taxes using SmartAirs?",
    desc: "As a registered taxpayer, make instant tax payments and download your receipts immediately using the secure e-payment channels.",
  },
  {
    title: "What do I do if I forget my taxpayer ID?",
    desc: "Click on the Forgot Taxpayer ID link and provide required information. Your unique Taxpayer ID would be sent to your registered email address and phone number.",
  },
];

export const list = [
  "Generate Taxpayer ID",
  "File Returns",
  "View Assessments Raised",
];
