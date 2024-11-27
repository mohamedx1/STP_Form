import React, { useState } from "react";
import { Trophy, UsersRound } from "lucide-react";
import bar from "./assets/par.png";
import logo from "./assets/LOGO.png";
import years from "./assets/year.svg";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    college: "",
    major: "",
    graduationYear: "",
    participation: "",
    firstPreference: "",
    secondPreference: "",
    competitionChoice: "",
    reason: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.nationalId) newErrors.nationalId = "National ID is required";
    if (!formData.college) newErrors.college = "College is required";
    if (!formData.major) newErrors.major = "Major is required";
    if (!formData.graduationYear)
      newErrors.graduationYear = "Graduation year is required";
    if (!formData.participation)
      newErrors.participation = "Participation type is required";
    if (formData.participation === "workshops") {
      if (!formData.firstPreference)
        newErrors.firstPreference = "First preference is required";
      if (!formData.secondPreference)
        newErrors.secondPreference = "Second preference is required";
    }
    if (formData.participation === "competition") {
      if (!formData.competitionChoice)
        newErrors.competitionChoice = "Competition selection is required";
    }
    if (!formData.reason)
      newErrors.reason = "Reason for participation is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Prepare the data you want to send to the backend
        const response = await fetch("https://stp-org.software/api/users", {
          method: "POST", // or 'PUT' if you're updating data
          headers: {
            "Content-Type": "application/json", // Make sure to set the Content-Type to JSON
          },
          body: JSON.stringify(formData), // Convert the formData object to JSON
        });

        if (response.ok) {
          // Handle success, e.g., alert the user or redirect
          alert("Form submitted successfully!");
          console.log("Form data:", formData);
        } else {
          // Handle server errors or other issues
          alert("Failed to submit form. Please try again.");
        }
      } catch (error) {
        // Handle network or unexpected errors
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      }
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className='bg-primary'>
      <div className='h-32 flex justify-between  w-1/2 mx-auto items-center '>
        <figure>
          <img src={logo} alt='logo' className='w-24 ' />
        </figure>
        <figure>
          <img src={years} alt='20years' className='w-32 ' />
        </figure>
      </div>
      <div className='min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12 '>
        <div className='relative py-3 sm:max-w-xl sm:mx-auto '>
          <div className='relative px-4 py-10 bg-secondary mx-8 md:mx-0 shadow rounded-3xl sm:p-10'>
            <header
              className='absolute -top-12 -translate-x-24 md:block hidden '
              style={{
                width: "calc(100% + 8rem)",
              }}
            >
              <figcaption>
                <img src={bar} alt='bar' />
              </figcaption>
            </header>
            <div className='max-w-md mx-auto'>
              <div className='flex items-center space-x-5'>
                <div className='block pl-2 font-semibold text-xl self-start text-gray-700'>
                  <h2 className='leading-relaxed'>Registration Form</h2>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className='divide-y divide-gray-200'
              >
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='flex flex-col'>
                    <label className='leading-loose'>Full Name*</label>
                    <input
                      type='text'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      placeholder='Full Name'
                      required
                    />
                    {errors.fullName && (
                      <span className='text-red-500 text-sm'>
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <label className='leading-loose'>Email*</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      placeholder='Email'
                      required
                    />
                    {errors.email && (
                      <span className='text-red-500 text-sm'>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  {/* -------------------------------------------------------------------------------------------------------------- */}

                  <div className='grid gap-4 md:grid-cols-2 grid-cols-1'>
                    <div className='flex flex-col'>
                      <label className='leading-loose'>WhatsApp Number*</label>
                      <input
                        type='tel'
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        placeholder='WhatsApp Number'
                        required
                      />
                      {errors.phoneNumber && (
                        <span className='text-red-500 text-sm'>
                          {errors.phoneNumber}
                        </span>
                      )}
                    </div>

                    <div className='flex flex-col'>
                      <label className='leading-loose'>National ID*</label>
                      <input
                        type='text'
                        name='nationalId'
                        value={formData.nationalId}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        placeholder='National ID'
                        required
                      />
                      {errors.nationalId && (
                        <span className='text-red-500 text-sm'>
                          {errors.nationalId}
                        </span>
                      )}
                    </div>

                    <div className='flex flex-col'>
                      <label className='leading-loose'>College*</label>
                      <input
                        type='text'
                        name='college'
                        value={formData.college}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        placeholder='College'
                        required
                      />
                      {errors.college && (
                        <span className='text-red-500 text-sm'>
                          {errors.college}
                        </span>
                      )}
                    </div>

                    <div className='flex flex-col'>
                      <label className='leading-loose'>Major*</label>
                      <input
                        type='text'
                        name='major'
                        value={formData.major}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        placeholder='Major'
                        required
                      />
                      {errors.major && (
                        <span className='text-red-500 text-sm'>
                          {errors.major}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <label className='leading-loose'>Graduation Year*</label>
                    <select
                      name='graduationYear'
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      required
                    >
                      <option value=''>Select Year</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={2024 + i}>
                          {2024 + i}
                        </option>
                      ))}
                    </select>
                    {errors.graduationYear && (
                      <span className='text-red-500 text-sm'>
                        {errors.graduationYear}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <label className='leading-loose mb-2 text-gray-800 font-semibold'>
                      Want to Participate in:
                    </label>
                    <div className='flex gap-4'>
                      <label className='flex-1'>
                        <input
                          type='radio'
                          name='participation'
                          value='competition'
                          checked={formData.participation === "competition"}
                          onChange={handleChange}
                          className='sr-only'
                        />
                        <div
                          className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.participation === "competition"
                              ? "border-primary bg-primary bg-opacity-10"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <Trophy
                            className={` w-20 h-20 mb-2 text-primary   `}
                          />
                          <span
                            className={`font-medium ${
                              formData.participation === "competition"
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            Competitions
                          </span>
                        </div>
                      </label>
                      <label className='flex-1'>
                        <input
                          type='radio'
                          name='participation'
                          value='workshops'
                          checked={formData.participation === "workshops"}
                          onChange={handleChange}
                          className='sr-only'
                        />
                        <div
                          className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.participation === "workshops"
                              ? "border-primary bg-primary bg-opacity-10"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <UsersRound
                            className={` w-20 h-20 mb-2 text-primary   `}
                          />
                          <span
                            className={`font-medium ${
                              formData.participation === "workshops"
                                ? "text-primary"
                                : "text-gray-700"
                            }`}
                          >
                            Workshops
                          </span>
                        </div>
                      </label>
                    </div>
                    {errors.participation && (
                      <span className='text-red-500 text-sm mt-1'>
                        {errors.participation}
                      </span>
                    )}
                  </div>
                  {formData.participation === "workshops" && (
                    <>
                      <div className='flex flex-col'>
                        <label className='leading-loose'>
                          First Preference
                        </label>
                        <select
                          name='firstPreference'
                          value={formData.firstPreference}
                          onChange={handleChange}
                          className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                          required
                        >
                          <option value=''>Select Preference</option>
                          <option value='Python'>Python</option>
                          <option value='Machine learning'>
                            Machine learning
                          </option>
                          <option value='Ansys'>Ansys</option>
                          <option value='Solidworks'>Solidworks</option>
                          <option value='Graphic design'>Graphic design</option>
                          <option value='Montage'>Montage</option>
                        </select>
                        {errors.firstPreference && (
                          <span className='text-red-500 text-sm'>
                            {errors.firstPreference}
                          </span>
                        )}
                      </div>
                      <div className='flex flex-col'>
                        <label className='leading-loose'>
                          Second Preference
                        </label>
                        <select
                          name='secondPreference'
                          value={formData.secondPreference}
                          onChange={handleChange}
                          className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                          required
                        >
                          <option value=''>Select Preference</option>
                          <option value='Python'>Python</option>
                          <option value='Machine learning'>
                            Machine learning
                          </option>
                          <option value='Ansys'>Ansys</option>
                          <option value='Solidworks'>Solidworks</option>
                          <option value='Graphic design'>Graphic design</option>
                          <option value='Montage'>Montage</option>
                        </select>
                        {errors.secondPreference && (
                          <span className='text-red-500 text-sm'>
                            {errors.secondPreference}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                  {formData.participation === "competition" && (
                    <div className='flex flex-col'>
                      <label className='leading-loose'>Competitions</label>
                      <select
                        name='competitionChoice'
                        value={formData.competitionChoice}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        required
                      >
                        <option value=''>Select Competition</option>
                        <option value='Prescription Digitization'>
                          Prescription Digitization
                        </option>
                        <option value='RoboQuest'>RoboQuest</option>
                      </select>
                      {errors.competitionChoice && (
                        <span className='text-red-500 text-sm'>
                          {errors.competitionChoice}
                        </span>
                      )}
                    </div>
                  )}
                  <div className='flex flex-col'>
                    <label className='leading-loose'>
                      Why do you want to Participate in this
                      Workshop/Competition?
                    </label>
                    <textarea
                      name='reason'
                      value={formData.reason}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      rows='4'
                      placeholder='Your reason'
                      required
                    ></textarea>
                    {errors.reason && (
                      <span className='text-red-500 text-sm'>
                        {errors.reason}
                      </span>
                    )}
                  </div>
                  <div className='flex flex-col'>
                    <label className='leading-loose'>
                      Any Comment or Question
                    </label>
                    <textarea
                      name='comment'
                      value={formData.comment}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      rows='4'
                      placeholder='Your comment or question'
                    ></textarea>
                  </div>
                </div>
                <div className='pt-4 flex items-center space-x-4'>
                  <button
                    type='submit'
                    className='bg-primary flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-[#6B0000] transition-colors'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
