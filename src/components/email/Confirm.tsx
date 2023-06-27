import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const Confirm = ({ name, message }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for sending me a message!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>
              Thanks for reaching out on my personal website! This is an automated email to let
              you know I just got your message:
            </Text>

            <Text style={text}>
              <code>&quot;{message}&quot;</code>
            </Text>

            <Text style={text}>I will do my best to respond to you in 24 hours.</Text>

            <Text style={text}>Expect to hear from me soon!</Text>
            <Text style={text}> -Marcus</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Confirm;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
