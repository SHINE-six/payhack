import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-8">
        <div>
          <Link
            href="#"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Change technology
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
            <Image
              src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
              width={160}
              height={160}
              alt="Node.js"
            />
          </div>
          <h1 className="text-2xl font-semibold">Node.js (Express)</h1>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Integrate FinAuth
          </h2>
        </div>
      </div>
      <section className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Install dependencies
        </h1>
        <p className="text-muted-foreground leading-7">
          Your application will need the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            @finauth/express-open-finance
          </code>{" "}
          package which is a FinAuth-maintained secured library to access Open
          Finance API for Express.
        </p>
        <div className="relative">
          <div className="rounded-lg bg-zinc-950 p-4">
            <div className="flex items-center justify-between">
              <code className="text-sm text-zinc-100 font-mono">
                npm install express @finauth/express-open-finance --save
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-zinc-400 hover:text-zinc-500"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "npm install express express-openid-connect --save"
                  )
                }
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Configure Router</h2>
        <p className="text-muted-foreground leading-7">
          The Express OpenID Connect library provides the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            auth
          </code>{" "}
          router in order to attach authentication routes to your application.
          You will need to configure the router with the following configuration
          keys:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-7 ml-4">
          <li>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              baseURL
            </code>{" "}
            - The URL where the application is served
          </li>
          <li>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              secret
            </code>{" "}
            - A long, random string
          </li>
          <li>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              issuerBaseURL
            </code>{" "}
            - The Domain as a secure URL found in your Application settings
          </li>
          <li>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              clientID
            </code>{" "}
            - The Client ID found in your Application settings
          </li>
        </ul>
        <p className="text-muted-foreground leading-7">
          {"Here's"} an example already configured with your information.
        </p>
        <div className="relative">
          <div className="rounded-lg bg-zinc-950 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1" />
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-zinc-400 hover:text-zinc-100"
                onClick={() => {
                  const code = `const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'wWRPzj3e3WhffZVlTDCeZBlUnPSRmt',
  issuerBaseURL: 'https://dev-n0qafwycmybf0id2.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});`;
                  navigator.clipboard.writeText(code);
                }}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
            <pre className="text-sm font-mono text-zinc-100 overflow-x-auto">
              <code>{`const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'wWRPzj3e3WhffZVlTDCeZBlUnPSRmt',
  issuerBaseURL: 'https://dev-n0qafwycmybf0id2.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
