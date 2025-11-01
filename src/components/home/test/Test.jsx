import React from 'react'
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1>{t("Hello")}</h1>
      </div>
    </>
  )
}

export default Test
