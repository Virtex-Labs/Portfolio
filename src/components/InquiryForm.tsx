import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SERVICES, QUESTIONNAIRES } from "@/data/inquiry_questions";

export default function InquiryForm() {
  const [phase, setPhase] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isOrg, setIsOrg] = useState("no");
  const [orgName, setOrgName] = useState("");
  const [service, setService] = useState("");

  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [termsAgreed, setTermsAgreed] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phase === 2 && turnstileRef.current && (window as any).turnstile) {
      try {
        (window as any).turnstile.reset();
      } catch (e) {
      }

      (window as any).turnstile.render(turnstileRef.current, {
        sitekey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY_PROD,
        theme: "light",
      });
    }
  }, [phase]);
  const scrollToTop = () => {
    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const handleNextPhase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) {
      alert("Please fill in your name, email, and select a service.");
      return;
    }
    if (isOrg === "yes" && !orgName) {
      alert("Please provide your organization name.");
      return;
    }
    setPhase(2);
    setTimeout(scrollToTop, 50);
  };

  const handleCheckboxChange = (qId: string, option: string, checked: boolean) => {
    setAnswers((prev) => {
      const current = prev[qId] || [];
      if (checked) {
        return { ...prev, [qId]: [...current, option] };
      } else {
        return { ...prev, [qId]: current.filter((o: string) => o !== option) };
      }
    });
  };

  const handleAnswerChange = (qId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const renderQuestion = (q: any) => {
    switch (q.type) {
      case "textarea":
        return (
          <div key={q.id} className="space-y-3">
            <Label className="text-base font-semibold">{q.title}{q.required && <span className="text-red-500">*</span>}</Label>
            <p className="text-sm text-zinc-500">{q.description}</p>
            <Textarea
              required={q.required}
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder="Your answer here..."
              className="min-h-[100px]"
              maxLength={q.maxLength}
            />
            {q.maxLength && (
              <p className="text-xs text-right text-zinc-400">
                {(answers[q.id] || "").length} / {q.maxLength}
              </p>
            )}
          </div>
        );
      case "radio":
        return (
          <div key={q.id} className="space-y-3">
            <Label className="text-base font-semibold">{q.title}{q.required && <span className="text-red-500">*</span>}</Label>
            <p className="text-sm text-zinc-500">{q.description}</p>
            <RadioGroup
              required={q.required}
              value={answers[q.id] || ""}
              onValueChange={(val) => handleAnswerChange(q.id, val)}
              className="space-y-2 mt-2"
            >
              {q.options.map((opt: string) => (
                <div className="flex items-center space-x-2" key={opt}>
                  <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                  <Label htmlFor={`${q.id}-${opt}`} className="font-normal cursor-pointer leading-tight">{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case "checkbox":
        return (
          <div key={q.id} className="space-y-3">
            <Label className="text-base font-semibold">{q.title}{q.required && <span className="text-red-500">*</span>}</Label>
            <p className="text-sm text-zinc-500">{q.description}</p>
            <div className="space-y-2 mt-2">
              {q.options.map((opt: string) => {
                const isChecked = (answers[q.id] || []).includes(opt);
                return (
                  <div className="flex items-center space-x-2" key={opt}>
                    <Checkbox
                      id={`${q.id}-${opt}`}
                      checked={isChecked}
                      onCheckedChange={(checked) => handleCheckboxChange(q.id, opt, checked === true)}
                    />
                    <Label htmlFor={`${q.id}-${opt}`} className="font-normal cursor-pointer leading-tight">{opt}</Label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "select":
        return (
          <div key={q.id} className="space-y-3">
            <Label className="text-base font-semibold">{q.title}{q.required && <span className="text-red-500">*</span>}</Label>
            <p className="text-sm text-zinc-500">{q.description}</p>
            <Select required={q.required} value={answers[q.id] || ""} onValueChange={(val) => handleAnswerChange(q.id, val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {q.options.map((opt: string) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAgreed) {
      alert("You must agree to the Terms & Conditions before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("service", SERVICES.find(s => s.id === service)?.title || service);

      const turnstileInput = document.querySelector('[name="cf-turnstile-response"]') as HTMLInputElement;
      if (turnstileInput) {
        formData.append("cf-turnstile-response", turnstileInput.value);
      }

      const questionnaireData: Record<string, any> = {};
      questionnaireData["Organization"] = isOrg === "yes" ? orgName : "N/A";

      const questions = QUESTIONNAIRES[service] || [];
      questions.forEach((q) => {
        questionnaireData[q.title] = answers[q.id] || "No answer provided";
      });

      formData.append("questionnaireData", JSON.stringify(questionnaireData));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitStatus("success");
      } else {
        throw new Error(data.error || "Failed to submit inquiry.");
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">Inquiry Received!</CardTitle>
            <CardDescription>
              Thank you for reaching out, {name}. We have received your detailed project blueprint and will get back to you shortly at {email}.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className={`transition-all duration-500 w-full ${phase === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <form onSubmit={handleNextPhase} className="w-full min-h-[calc(100dvh-120px)] flex flex-col lg:flex-row max-w-[1600px] mx-auto p-4 sm:p-8 lg:p-12 pb-24 lg:py-12 gap-8 lg:items-center lg:justify-center">

          <div className="flex flex-col gap-8 lg:w-1/2 w-full max-w-2xl">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Start a Project</h1>
              <p className="text-[2vh] text-zinc-600 leading-relaxed">
                Tell us about yourself and select the type of service you need.
                Our pricing is structured clearly based on the complexity of the selected service.
              </p>
            </div>

            <Card className="shadow-sm w-full">
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <CardDescription>Basic contact information to get started.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input id="name" required value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                    <Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Label>Are you inquiring on behalf of a company or organization?</Label>
                  <RadioGroup value={isOrg} onValueChange={setIsOrg} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="org-no" />
                      <Label htmlFor="org-no" className="font-normal cursor-pointer">No, it's a personal project</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="org-yes" />
                      <Label htmlFor="org-yes" className="font-normal cursor-pointer">Yes, I'm from an organization</Label>
                    </div>
                  </RadioGroup>
                </div>

                {isOrg === "yes" && (
                  <div className="space-y-2 pt-2 animate-in fade-in slide-in-from-top-4 duration-300">
                    <Label htmlFor="orgName">Organization Name <span className="text-red-500">*</span></Label>
                    <Input id="orgName" required value={orgName} onChange={e => setOrgName(e.target.value)} placeholder="Acme Corp" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:w-1/2 w-full lg:justify-center">
            <Card className="shadow-sm w-full flex flex-col">
              <CardHeader>
                <CardTitle>Select a Service</CardTitle>
                <CardDescription>Which area can we help you with?</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-6">
                <RadioGroup value={service} onValueChange={setService} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map((srv) => (
                    <div key={srv.id} className="relative h-full">
                      <RadioGroupItem value={srv.id} id={`srv-${srv.id}`} className="peer sr-only" />
                      <Label
                        htmlFor={`srv-${srv.id}`}
                        className="flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-zinc-50 hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full min-h-[120px]"
                      >
                        <span className="font-semibold text-base mb-1">{srv.title}</span>
                        <span className="text-xs font-normal text-muted-foreground leading-snug">{srv.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-end pt-4 border-t mt-auto">
                <Button type="submit" size="lg" disabled={!name || !email || !service || (isOrg === "yes" && !orgName)}>
                  Continue to Questionnaire
                </Button>
              </CardFooter>
            </Card>
          </div>

        </form>
      </div>

      <div className={`transition-all duration-500 w-full flex-col lg:flex-row max-w-[1600px] mx-auto p-4 sm:p-8 lg:p-12 pb-24 gap-8 lg:items-start lg:justify-center ${phase === 2 ? 'flex opacity-100 animate-in fade-in zoom-in-95' : 'hidden opacity-0'}`}>

        <div className="flex flex-col gap-6 lg:w-1/3 w-full shrink-0 sm:sticky sm:top-[120px] h-fit z-10">
          <div>
            <Button variant="outline" size="sm" type="button" onClick={() => { setPhase(1); setTimeout(scrollToTop, 50); }} className="mb-6 w-fit">
              &larr; Back
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-zinc-900">Project Discovery</h1>
            <p className="text-[2vh] text-zinc-600 leading-relaxed mb-6">
              Please fill out the discovery questionnaire below to help us understand your vision for the <strong className="text-zinc-900">{SERVICES.find(s => s.id === service)?.title}</strong>.
            </p>

            {SERVICES.find(s => s.id === service)?.info && (
              <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 text-sm text-zinc-700 leading-relaxed shadow-sm">
                <h3 className="font-semibold text-zinc-900 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Payment & Process
                </h3>
                <p>
                  {SERVICES.find(s => s.id === service)?.info}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:w-2/3 w-full max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{SERVICES.find(s => s.id === service)?.title} Questionnaire</CardTitle>
                    <CardDescription className="mt-1">Provide as much detail as possible.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                {(QUESTIONNAIRES[service] || []).map((q) => renderQuestion(q))}
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent>
                <div className="flex flex-col space-y-6">
                  <div ref={turnstileRef}></div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={termsAgreed} onCheckedChange={(c) => setTermsAgreed(c === true)} />
                    <Label htmlFor="terms" className="font-normal cursor-pointer leading-tight text-zinc-600">
                      I have read and agree to the <a href="/terms" target="_blank" className="text-primary underline underline-offset-4 hover:text-primary/80">Terms & Conditions</a>.
                    </Label>
                  </div>

                  {submitStatus === "error" && (
                    <div className="text-red-500 text-sm font-medium">{errorMessage}</div>
                  )}

                  <Button type="submit" size="lg" className="w-full sm:w-auto self-start" disabled={isSubmitting || !termsAgreed}>
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>

      </div>

    </div>
  );
}
