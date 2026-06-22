export function generateInquiryEmailHtml(
  service: string,
  name: string,
  email: string,
  questionnaireDataStr: string | undefined
) {
  let answers: Record<string, any> = {};
  try {
    answers = questionnaireDataStr ? JSON.parse(questionnaireDataStr) : {};
  } catch (e) {
    console.error("Failed to parse questionnaire data");
  }

  const getAns = (key: string) => {
    const val = answers[key];
    if (!val || val === "No answer provided" || val === "None") return '<span style="color: #999;">Not provided</span>';
    return Array.isArray(val) ? val.join(', ') : val;
  };

  let htmlContent = '';

  switch (service) {
    case 'Web Application Development':
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>🚀 Web Application Blueprint</h2>
          <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Organization:</strong> ${getAns("Organization")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #2563eb;">1. Core Vision</h3>
          <p><strong>The Big Picture:</strong><br/> ${getAns("The Big Picture")}</p>
          <p><strong>Inspiration:</strong><br/> ${getAns("The Inspiration")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #2563eb;">2. Technical Scope</h3>
          <ul>
            <li><strong>Target Users:</strong> ${getAns("The Users")}</li>
            <li><strong>Core Actions:</strong> ${getAns("The Content & Actions")}</li>
            <li><strong>Required Integrations:</strong> ${getAns("The Connections")}</li>
          </ul>
          <p><strong>Top 3 Must-Haves:</strong><br/> ${getAns("The 'Must-Haves'")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #2563eb;">3. Logistics</h3>
          <p><strong>Timeline:</strong> ${getAns("The Timeline")}</p>
          <p><strong>Budget:</strong> ${getAns("The Budget")}</p>
          
          <hr style="margin: 20px 0; border: 1px solid #eee;" />
          <p><strong>Extra Preferences:</strong><br/> ${getAns("Extra Preferences")}</p>
        </div>
      `;
      break;

    case 'Web Development & Design':
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>🎨 Web Design & Development Brief</h2>
          <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Organization:</strong> ${getAns("Organization")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #10b981;">1. Strategy & Content</h3>
          <p><strong>Primary Goal:</strong> ${getAns("The Primary Goal")}</p>
          <p><strong>Current Situation:</strong> ${getAns("The Current Situation")}</p>
          <p><strong>Content Readiness:</strong> ${getAns("The Content Readiness")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #10b981;">2. Aesthetics & Infrastructure</h3>
          <ul>
            <li><strong>Design Aesthetic:</strong> ${getAns("The Design Aesthetic")}</li>
            <li><strong>Estimated Size:</strong> ${getAns("The Size of the Website")}</li>
            <li><strong>Required Features:</strong> ${getAns("The Features")}</li>
          </ul>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #10b981;">3. Logistics</h3>
          <p><strong>Timeline:</strong> ${getAns("The Timeline")}</p>
          <p><strong>Setup Budget:</strong> ${getAns("The Budget Setup")}</p>

          <hr style="margin: 20px 0; border: 1px solid #eee;" />
          <p><strong>Extra Preferences:</strong><br/> ${getAns("Extra Preferences")}</p>
        </div>
      `;
      break;

    case 'Mobile Application Development':
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>📱 Mobile App Blueprint</h2>
          <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Organization:</strong> ${getAns("Organization")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #8b5cf6;">1. Core Vision</h3>
          <p><strong>Purpose:</strong><br/> ${getAns("The Core Purpose")}</p>
          <p><strong>Monetization:</strong> ${getAns("The Monetization Strategy")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #8b5cf6;">2. Technical & Infrastructure</h3>
          <ul>
            <li><strong>Target Platforms:</strong> ${getAns("The Platform Target")}</li>
            <li><strong>Hardware Needs:</strong> ${getAns("The Hardware Features")}</li>
            <li><strong>Auth Method:</strong> ${getAns("The Accounts & Security")}</li>
            <li><strong>Backend Status:</strong> ${getAns("The Existing Infrastructure")}</li>
          </ul>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #8b5cf6;">3. Logistics</h3>
          <p><strong>Timeline:</strong> ${getAns("The Timeline")}</p>
          <p><strong>Budget:</strong> ${getAns("The Budget")}</p>

          <hr style="margin: 20px 0; border: 1px solid #eee;" />
          <p><strong>Extra Preferences:</strong><br/> ${getAns("Extra Preferences")}</p>
        </div>
      `;
      break;

    case 'UI/UX Design':
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>✨ UI/UX Design Brief</h2>
          <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Organization:</strong> ${getAns("Organization")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #ec4899;">1. Project Context</h3>
          <p><strong>Product Type:</strong> ${getAns("The Project Type")}</p>
          <p><strong>Current State:</strong> ${getAns("The Current State")}</p>
          <p><strong>Target Audience:</strong><br/> ${getAns("The Target Audience")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #ec4899;">2. Design Scope</h3>
          <ul>
            <li><strong>Required Services:</strong> ${getAns("The Scope of Design")}</li>
            <li><strong>Final Deliverables:</strong> ${getAns("The Final Deliverables")}</li>
          </ul>
          <p><strong>Inspiration/Competitors:</strong><br/> ${getAns("The Inspiration & Competitors")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #ec4899;">3. Logistics</h3>
          <p><strong>Timeline:</strong> ${getAns("The Timeline")}</p>
          <p><strong>Budget:</strong> ${getAns("The Budget")}</p>

          <hr style="margin: 20px 0; border: 1px solid #eee;" />
          <p><strong>Extra Preferences:</strong><br/> ${getAns("Extra Preferences")}</p>
        </div>
      `;
      break;

    case 'Brand Designing':
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>🔥 Brand Identity Brief</h2>
          <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Organization:</strong> ${getAns("Organization")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #f59e0b;">1. Identity & Vibe</h3>
          <p><strong>The Core Identity:</strong><br/> ${getAns("The Core Identity")}</p>
          <p><strong>Current State:</strong> ${getAns("The Current State")}</p>
          <ul>
            <li><strong>Brand Keywords:</strong> ${getAns("The Brand Vibe & Keywords")}</li>
            <li><strong>Personality Traits:</strong> ${getAns("The Brand Personality")}</li>
          </ul>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #f59e0b;">2. Audience & Scope</h3>
          <p><strong>Target Audience:</strong><br/> ${getAns("The Target Audience")}</p>
          <ul>
            <li><strong>Required Deliverables:</strong> ${getAns("The Scope of Work (Deliverables)")}</li>
          </ul>
          <p><strong>Visual Inspiration:</strong><br/> ${getAns("The Inspiration")}</p>

          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 4px; color: #f59e0b;">3. Logistics</h3>
          <p><strong>Timeline:</strong> ${getAns("The Timeline")}</p>
          <p><strong>Budget:</strong> ${getAns("The Budget")}</p>

          <hr style="margin: 20px 0; border: 1px solid #eee;" />
          <p><strong>Extra Preferences:</strong><br/> ${getAns("Extra Preferences")}</p>
        </div>
      `;
      break;

    default:
      htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2>New ${service} Project Lead</h2>
          <p><strong>Client:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Organization:</strong> ${getAns("Organization")}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p>A new inquiry was submitted but no exact template matched the service.</p>
          <p><strong>Extra Preferences:</strong><br/> ${getAns("Extra Preferences")}</p>
        </div>
      `;
  }

  return htmlContent.replace('</div>', `
          <div style="margin-top: 30px; padding: 12px; background-color: #f9fafb; border-radius: 6px; font-size: 13px; color: #4b5563; border: 1px solid #e5e7eb;">
            <strong>✅ Legal Confirmation:</strong> The client explicitly confirmed they have read and agreed to the Terms and Conditions of Virtex Labs prior to submitting this inquiry.
          </div>
        </div>
  `);
}
