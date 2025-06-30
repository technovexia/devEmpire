import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronLeft, ChevronRight, Send, CheckCircle } from "lucide-react";

const formSchema = z.object({
  // Step 1: Basic Info
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  
  // Step 2: Project Details
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  
  // Step 3: Requirements
  description: z.string().min(20, "Please provide at least 20 characters describing your project"),
  goals: z.array(z.string()).min(1, "Please select at least one goal"),
  hearAbout: z.string().min(1, "Please tell us how you heard about us")
});

type FormData = z.infer<typeof formSchema>;

const projectTypes = [
  { value: "web", label: "Web Application", desc: "Custom web platforms and portals" },
  { value: "mobile", label: "Mobile App", desc: "iOS and Android applications" },
  { value: "ecommerce", label: "E-commerce", desc: "Online stores and marketplaces" },
  { value: "saas", label: "SaaS Platform", desc: "Software as a Service solutions" },
  { value: "api", label: "API Development", desc: "Backend services and integrations" },
  { value: "consulting", label: "Technical Consulting", desc: "Strategy and architecture guidance" }
];

const budgetRanges = [
  { value: "10k-25k", label: "$10k - $25k", desc: "Small to medium projects" },
  { value: "25k-50k", label: "$25k - $50k", desc: "Medium scale implementations" },
  { value: "50k-100k", label: "$50k - $100k", desc: "Large enterprise solutions" },
  { value: "100k+", label: "$100k+", desc: "Enterprise-grade systems" },
  { value: "discuss", label: "Let's Discuss", desc: "Custom requirements" }
];

const timelines = [
  { value: "asap", label: "ASAP", desc: "Immediate start needed" },
  { value: "1-3months", label: "1-3 Months", desc: "Planning for near-term" },
  { value: "3-6months", label: "3-6 Months", desc: "Medium-term planning" },
  { value: "6months+", label: "6+ Months", desc: "Long-term strategic project" },
  { value: "flexible", label: "Flexible", desc: "Timeline is negotiable" }
];

const goalOptions = [
  "Increase Revenue",
  "Improve User Experience", 
  "Reduce Operational Costs",
  "Scale Infrastructure",
  "Digital Transformation",
  "Competitive Advantage",
  "Market Expansion",
  "Process Automation"
];

const hearAboutOptions = [
  { value: "search", label: "Google Search" },
  { value: "referral", label: "Referral from Friend/Colleague" },
  { value: "social", label: "Social Media" },
  { value: "portfolio", label: "Saw Our Previous Work" },
  { value: "event", label: "Conference/Event" },
  { value: "other", label: "Other" }
];

export default function ContactWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      goals: []
    }
  });

  const watchedFields = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ["name", "email", "company"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["projectType", "budget", "timeline"];
    }
    
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: Implement actual form submission
      console.log("Form submitted:", { ...data, goals: selectedGoals });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  if (isSubmitted) {
    return (
      <Card className="glassmorphism">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-green-400" size={40} />
          </div>
          <h3 className="text-2xl font-monument font-bold text-imperial-platinum mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-imperial-platinum/70 mb-6">
            Your imperial summons has been received. Our council will review your conquest plans and respond within 24 hours.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glassmorphism">
      <CardContent className="p-8">
        <h3 className="text-2xl font-monument font-bold text-imperial-platinum mb-8">
          Send Imperial Message
        </h3>
        
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentStep 
                    ? 'bg-imperial-gold text-imperial-midnight' 
                    : 'bg-imperial-platinum/20 text-imperial-platinum/60'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-imperial-gold' : 'bg-imperial-platinum/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h4 className="text-lg font-monument font-semibold text-imperial-platinum mb-2">
                  Basic Information
                </h4>
                <p className="text-imperial-platinum/60 text-sm">
                  Tell us about yourself and your empire
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-imperial-platinum/80 text-sm font-semibold mb-2">
                    Royal Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-imperial-midnight/50 border border-imperial-platinum/20 rounded-lg px-4 py-3 text-imperial-platinum focus:border-imperial-gold focus:outline-none transition-colors duration-300"
                    placeholder="Your Imperial Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-imperial-platinum/80 text-sm font-semibold mb-2">
                    Empire Domain *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-imperial-midnight/50 border border-imperial-platinum/20 rounded-lg px-4 py-3 text-imperial-platinum focus:border-imperial-gold focus:outline-none transition-colors duration-300"
                    placeholder="sovereign@yourempire.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-imperial-platinum/80 text-sm font-semibold mb-2">
                  Empire Name *
                </label>
                <input
                  {...register("company")}
                  className="w-full bg-imperial-midnight/50 border border-imperial-platinum/20 rounded-lg px-4 py-3 text-imperial-platinum focus:border-imperial-gold focus:outline-none transition-colors duration-300"
                  placeholder="Your Company/Organization"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h4 className="text-lg font-monument font-semibold text-imperial-platinum mb-2">
                  Project Details
                </h4>
                <p className="text-imperial-platinum/60 text-sm">
                  Define your conquest requirements
                </p>
              </div>
              
              <div>
                <label className="block text-imperial-platinum/80 text-sm font-semibold mb-3">
                  Project Type *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <label key={type.value} className="cursor-pointer">
                      <input
                        {...register("projectType")}
                        type="radio"
                        value={type.value}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border transition-all duration-300 ${
                        watchedFields.projectType === type.value
                          ? 'border-imperial-gold bg-imperial-gold/10'
                          : 'border-imperial-platinum/20 hover:border-imperial-platinum/40'
                      }`}>
                        <div className="font-semibold text-imperial-platinum text-sm">
                          {type.label}
                        </div>
                        <div className="text-imperial-platinum/60 text-xs">
                          {type.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-imperial-platinum/80 text-sm font-semibold mb-3">
                    Budget Range *
                  </label>
                  <div className="space-y-2">
                    {budgetRanges.map((budget) => (
                      <label key={budget.value} className="cursor-pointer">
                        <input
                          {...register("budget")}
                          type="radio"
                          value={budget.value}
                          className="sr-only"
                        />
                        <div className={`p-3 rounded-lg border transition-all duration-300 ${
                          watchedFields.budget === budget.value
                            ? 'border-imperial-gold bg-imperial-gold/10'
                            : 'border-imperial-platinum/20 hover:border-imperial-platinum/40'
                        }`}>
                          <div className="font-semibold text-imperial-platinum text-sm">
                            {budget.label}
                          </div>
                          <div className="text-imperial-platinum/60 text-xs">
                            {budget.desc}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-imperial-platinum/80 text-sm font-semibold mb-3">
                    Timeline *
                  </label>
                  <div className="space-y-2">
                    {timelines.map((timeline) => (
                      <label key={timeline.value} className="cursor-pointer">
                        <input
                          {...register("timeline")}
                          type="radio"
                          value={timeline.value}
                          className="sr-only"
                        />
                        <div className={`p-3 rounded-lg border transition-all duration-300 ${
                          watchedFields.timeline === timeline.value
                            ? 'border-imperial-gold bg-imperial-gold/10'
                            : 'border-imperial-platinum/20 hover:border-imperial-platinum/40'
                        }`}>
                          <div className="font-semibold text-imperial-platinum text-sm">
                            {timeline.label}
                          </div>
                          <div className="text-imperial-platinum/60 text-xs">
                            {timeline.desc}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.timeline && (
                    <p className="text-red-400 text-sm mt-1">{errors.timeline.message}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Requirements */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h4 className="text-lg font-monument font-semibold text-imperial-platinum mb-2">
                  Project Requirements
                </h4>
                <p className="text-imperial-platinum/60 text-sm">
                  Share your vision and goals
                </p>
              </div>
              
              <div>
                <label className="block text-imperial-platinum/80 text-sm font-semibold mb-2">
                  Project Description *
                </label>
                <textarea
                  {...register("description")}
                  rows={4}
                  className="w-full bg-imperial-midnight/50 border border-imperial-platinum/20 rounded-lg px-4 py-3 text-imperial-platinum focus:border-imperial-gold focus:outline-none transition-colors duration-300"
                  placeholder="Describe your digital conquest plans, challenges you're facing, and what success looks like..."
                />
                {errors.description && (
                  <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-imperial-platinum/80 text-sm font-semibold mb-3">
                  Primary Goals (Select all that apply) *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`p-3 rounded-lg border text-sm transition-all duration-300 ${
                        selectedGoals.includes(goal)
                          ? 'border-imperial-gold bg-imperial-gold/10 text-imperial-gold'
                          : 'border-imperial-platinum/20 text-imperial-platinum/70 hover:border-imperial-platinum/40'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                {errors.goals && (
                  <p className="text-red-400 text-sm mt-1">{errors.goals.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-imperial-platinum/80 text-sm font-semibold mb-2">
                  How did you hear about us? *
                </label>
                <select
                  {...register("hearAbout")}
                  className="w-full bg-imperial-midnight/50 border border-imperial-platinum/20 rounded-lg px-4 py-3 text-imperial-platinum focus:border-imperial-gold focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.hearAbout && (
                  <p className="text-red-400 text-sm mt-1">{errors.hearAbout.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              className={`border-imperial-platinum/20 text-imperial-platinum/70 hover:bg-imperial-platinum/10 ${
                currentStep === 1 ? 'invisible' : ''
              }`}
            >
              <ChevronLeft className="mr-2" size={16} />
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold"
              >
                Next
                <ChevronRight className="ml-2" size={16} />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-imperial-gold text-imperial-midnight hover:bg-yellow-400 font-semibold"
                disabled={!isValid || selectedGoals.length === 0}
              >
                <Send className="mr-2" size={16} />
                Send Imperial Message
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
