import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ko from "react-intl/locale-data/ko";

import koTranslations from './locales/ko.json';
import enTranslations from './locales/en.json';



addLocaleData([...en, ...ko]);

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslations });

    this.switchToKorean = () =>
      this.setState({ locale: "ko", messages: koTranslations });

    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale: "en",
      messages: enTranslations,
      switchToEnglish: this.switchToEnglish,
      switchToKorean: this.switchToKorean
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Context.Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    );
  }
}

export { IntlProviderWrapper, Context as IntlContext };