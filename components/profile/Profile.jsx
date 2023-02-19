import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ReactFlagsSelect from "react-flags-select";
import Select from "react-select";

function Profile() {
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [country, setCountry] = useState("EG");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [governorate, setGovernorate] = useState("Cairo");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const governorates = [
    { label: "Alexandria", value: "Alexandria" },
    { label: "Aswan", value: "Aswan" },
    { label: "Asyut", value: "Asyut" },
    { label: "Beheira", value: "Beheira" },
    { label: "Beni Suef", value: "Beni Suef" },
    { label: "Cairo", value: "Cairo" },
    { label: "Dakahlia", value: "Dakahlia" },
    { label: "Damietta", value: "Damietta" },
    { label: "Faiyum", value: "Faiyum" },
    { label: "Gharbia", value: "Gharbia" },
    { label: "Giza", value: "Giza" },
    { label: "6 October", value: "6 October" },
    { label: "Ismailia", value: "Ismailia" },
    { label: "Kafr El Sheikh", value: "Kafr El Sheikh" },
    { label: "Luxor", value: "Luxor" },
    { label: "Matruh", value: "Matruh" },
    { label: "Minya", value: "Minya" },
    { label: "Monufia", value: "Monufia" },
    { label: "New Valley", value: "New Valley" },
    { label: "North Sinai", value: "North Sinai" },
    { label: "Port Said", value: "Port Said" },
    { label: "Qalyubia", value: "Qalyubia" },
    { label: "Qena", value: "Qena" },
    { label: "Red Sea", value: "Red Sea" },
    { label: "Sharqia", value: "Sharqia" },
    { label: "Sohag", value: "Sohag" },
    { label: "South Sinai", value: "South Sinai" },
    { label: "Suez", value: "Suez" },
  ];

  const options = governorates;
  const defaultOption = options[5];

  return (
    <div className={styles.form}>
      <div className={styles.country}>
        <label className={styles.label}>Country</label>
        <ReactFlagsSelect
          countries={["IL"]}
          blacklistCountries={true}
          searchable={true}
          selected={country}
          onSelect={(code) => setCountry((prev) => code)}
        />
      </div>
      <div className={styles.names}>
        <div className={`${styles.formGroup} ${styles.name}`}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName((prev) => e.target.value)}
            className={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className={`${styles.formGroup} ${styles.name}`}>
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName((prev) => e.target.value)}
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
      </div>
      <div className={`${styles.formGroup} ${styles.address}`}>
        <label className={styles.label} htmlFor="address">
          Address
        </label>
        <input
          value={address}
          onChange={(e) => setAddress((prev) => e.target.value)}
          className={styles.input}
          type="text"
          id="address"
          name="address"
          required
        />
      </div>
      <div className={`${styles.formGroup} ${styles.address}`}>
        <label className={styles.label} htmlFor="address">
          Apartment
        </label>
        <input
          value={apartment}
          onChange={(e) => setApartment((prev) => e.target.value)}
          className={styles.input}
          type="text"
          id="address"
          name="address"
          required
        />
      </div>
      <div className={styles.cityInfo}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="city">
            City
          </label>
          <input
            value={city}
            onChange={(e) => setCity((prev) => e.target.value)}
            className={styles.input}
            type="text"
            id="city"
            name="city"
            required
          />
        </div>
        <div className={`${styles.formGroup} `}>
          <label className={styles.label} htmlFor="governorate">
            Governorate
          </label>
          <Select
            options={governorates}
            value={governorate}
            onChange={(e) => setGovernorate((prev) => e)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderRadius: "4px",
                padding: "4.6px",
              }),
            }}
          />
        </div>
        <div className={`${styles.formGroup}`}>
          <label className={styles.label} htmlFor="postalCode">
            Postal Code
          </label>
          <input
            value={postalCode}
            onChange={(e) => setPostalCode((prev) => e.target.value)}
            className={styles.input}
            type="text"
            id="postalCode"
            name="postalCode"
            required
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail((prev) => e.target.value)}
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label
          value={phoneNumber}
          onChange={(e) => setPhoneNumber((prev) => e.target.value)}
          className={styles.label}
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber((prev) => e.target.value)}
          className={styles.input}
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
        />
      </div>
      <button className={styles.button}>Submit</button>
    </div>
  );
}

export default Profile;
