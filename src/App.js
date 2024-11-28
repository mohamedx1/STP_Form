import React, { useState } from "react";
import bar from "./assets/par.png";
import logo from "./assets/LOGO.png";
import years from "./assets/year.svg";
import vector from "./assets/Vector.png";
import workshops from "./assets/workshop.png";
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
  const validateForm = (data) => {
    const validationErrors = {};

    if (!data.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    }

    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "A valid email is required.";
    }

    if (!data.phoneNumber || !/^\d{11,12}$/.test(data.phoneNumber)) {
      validationErrors.phoneNumber = "Phone number must be 11 to 12 digits.";
    }

    if (!data.nationalId || !/^\d{14}$/.test(data.nationalId)) {
      validationErrors.nationalId = "National ID must be exactly 14 digits.";
    }

    if (!data.college.trim()) {
      validationErrors.college = "College is required.";
    }

    if (!data.major.trim()) {
      validationErrors.major = "Major is required.";
    }

    if (
      !data.graduationYear ||
      !/^\d{4}$/.test(data.graduationYear) ||
      parseInt(data.graduationYear) < 1900
    ) {
      validationErrors.graduationYear = "Graduation year is invalid.";
    }

    if (!["competition", "workshops"].includes(data.participation)) {
      validationErrors.participation =
        "Participation must be either 'competition' or 'workshops'.";
    }

    if (data.participation === "workshops") {
      if (!data.firstPreference) {
        validationErrors.firstPreference = "First preference is required.";
      }

      if (!data.secondPreference) {
        validationErrors.secondPreference = "Second preference is required.";
      } else if (data.secondPreference === data.firstPreference) {
        validationErrors.secondPreference =
          "First and second preferences must be different.";
      }
    }

    if (data.participation === "competition" && !data.competitionChoice) {
      validationErrors.competitionChoice = "Competition choice is required.";
    }

    if (!data.reason.trim()) {
      validationErrors.reason = "Reason is required.";
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("https://stp-org.software/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully", formData);
          setFormData({
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
        } else {
          const result = await response.json();
          console.error("Error submitting form:", result.errors);
          setErrors({
            submission: "National ID, phone number or email is already used.",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({
          submission: "National ID, phone number or email is already used..",
        });
      }
    } else {
      console.log("Validation failed", validationErrors);
    }
  };

  return (
    <div className='bg-primary font-bold'>
      <div className='md:h-32 h-24 flex justify-between w-11/12   mx-auto items-center '>
        <figure>
          <img src={logo} alt='logo' className='md:w-24 w-14 ' />
        </figure>
        <figure>
          <img src={years} alt='20years' className='md:w-32 w-20 ' />
        </figure>
      </div>
      <header className='  md:w-1/2 sm:w-11/12 mx-auto border-black border-4 rounded-xl  '>
        <figure className='rounded-lg'>
          <img src={bar} alt='bar ' className='rounded-lg' />
        </figure>
      </header>
      <div className='min-h-screen bg-primary  flex flex-col justify-center '>
        <div className='  sm:max-w-xl sm:mx-auto '>
          <div className='px-4 py-10 bg-secondary mx-8 md:mx-0 shadow  sm:p-10'>
            <div className='max-w-md mx-auto'>
              <div className='flex items-center space-x-5'></div>
              <form
                onSubmit={handleSubmit}
                className='divide-y divide-gray-200'
              >
                <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='flex flex-col'>
                    <label className='leading-loose mb-4'>Full Name*</label>
                    <input
                      type='text'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      placeholder='Full Name'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='leading-loose mb-4'>Email*</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      placeholder='Email'
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className='text-red-500 text-sm'>{errors.email}</p>
                  )}
                  {/* -------------------------------------------------------------------------------------------------------------- */}

                  <div className='grid gap-4 md:grid-cols-2 grid-cols-1'>
                    <div className='flex flex-col'>
                      <label className='leading-loose mb-4'>
                        WhatsApp Number*
                      </label>
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
                        <p className='text-red-500 text-sm'>
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    <div className='flex flex-col'>
                      <label className='leading-loose mb-4'>National ID*</label>
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
                        <p className='text-red-500 text-sm'>
                          {errors.nationalId}
                        </p>
                      )}
                    </div>

                    <div className='flex flex-col'>
                      <label className='leading-loose mb-4'>College*</label>
                      <input
                        type='text'
                        name='college'
                        value={formData.college}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        placeholder='College'
                        required
                      />
                    </div>

                    <div className='flex flex-col'>
                      <label className='leading-loose mb-4'>Major*</label>
                      <input
                        type='text'
                        name='major'
                        value={formData.major}
                        onChange={handleChange}
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                        placeholder='Major'
                        required
                      />
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <label className='leading-loose mb-4'>
                      Graduation Year*
                    </label>
                    <select
                      name='graduationYear'
                      value={formData.graduationYear}
                      onChange={handleChange}
                      className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600'
                      required
                    >
                      <option value=''>Select Year</option>
                      {[...Array(5)].map((_, i) => (
                        <option key={i} value={2024 + i}>
                          {2024 + i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='flex flex-col '>
                    <label className='leading-loose mb-2 mt-8 text-gray-800 font-semibold'>
                      Want to Participate in:
                    </label>
                    <div className='flex gap-8 mx-auto flex-wrap w-2/3'>
                      <div className='flex-1 '>
                        <label className=' flex flex-col '>
                          <input
                            type='radio'
                            name='participation'
                            value='competition'
                            checked={formData.participation === "competition"}
                            onChange={handleChange}
                            className='sr-only'
                          />
                          <div
                            className={`flex flex-col items-center justify-center p-8  rounded-lg cursor-pointer transition-colors bg-white ${
                              formData.participation === "competition"
                                ? " border-2 border-accent"
                                : " "
                            }`}
                          >
                            <div className='w-8  '>
                              <img
                                src={vector}
                                alt='vector'
                                className='w-8 h-8'
                              />
                            </div>
                          </div>
                          <span
                            className={`font-medium inline-block mx-auto mt-2 text-primary `}
                          >
                            Competitions
                          </span>
                        </label>
                      </div>

                      <div className='flex-1 '>
                        <label className=' flex flex-col '>
                          <input
                            type='radio'
                            name='participation'
                            value='workshops'
                            checked={formData.participation === "workshops"}
                            onChange={handleChange}
                            className='sr-only'
                          />
                          <div
                            className={`flex flex-col items-center justify-center p-8  rounded-lg cursor-pointer transition-colors bg-white ${
                              formData.participation === "workshops"
                                ? "border-2 border-accent"
                                : ""
                            }`}
                          >
                            <div className='w-8 '>
                              <img
                                src={workshops}
                                alt='workshops'
                                className='w-8 h-8'
                              />
                            </div>
                          </div>
                          <span
                            className={`font-medium inline-block mx-auto mt-2 text-primary`}
                          >
                            Workshops
                          </span>
                        </label>
                      </div>
                      {errors.participation && (
                        <p className='text-red-500 text-md'>
                          {errors.participation}
                        </p>
                      )}
                    </div>
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
                          <p className='text-red-500 text-sm'>
                            {errors.secondPreference}
                          </p>
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
                    className='bg-primary flex justify-center items-center  text-white px-8 py-2 mx-auto rounded-md focus:outline-none hover:bg-[#6B0000] transition-colors'
                  >
                    Submit
                  </button>
                </div>
                {errors.submission && (
                  <p className='text-red-500 text-lg text-center'>
                    {errors.submission}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
