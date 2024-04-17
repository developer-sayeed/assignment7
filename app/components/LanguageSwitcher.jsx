"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      'code': 'en',
      'language': 'English',
      "flag": "/usa.png"
    },
    {
      'code': 'bn',
      'language': 'Bangla',
      "flag": "/bd.png"
    }
  ]
  const found = languages.find(lang => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
  const [showManu, setShowManu] = useState(false);


  const handleLanguageChange = lang => {
    setSelectedLanguage({ ...selectedLanguage, code: lang, language: lang === 'en' ? 'English' : 'Bangla' });
    setShowManu(false);
    router.push(`/${lang}`)
  }

  return (
    <div className="flex gap-4 items-center bg-[#1D1E28]">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowManu(!showManu)}
        >
          {
            languages.code = "en" ? (
              <Image
                className="max-w-8"
                src="/usa.png"
                alt="bangla"
                height={100}
                width={165}
              />
            ) : (
              <Image
                className="max-w-8"
                src="/bd.png"
                alt="bangla"
                height={100}
                width={165}
              />
            )
          }
          {selectedLanguage.language}
        </button>
        {showManu && (
          <div className="absolute right-0 top-full mt-2 w-40 rounded-md p-2 z-10 shadow-lg bg-[#1D1E28]">
            {
              languages.map(entry => (
                <li
                  key={entry.code}
                  onClick={() => handleLanguageChange(entry.code)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-700"
                >
                  <Image
                    className="max-w-8"
                    src={entry.flag}
                    alt="bangla"
                    height={100}
                    width={165}
                  />
                  {entry.language}
                </li>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
