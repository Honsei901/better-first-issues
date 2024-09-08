import { Dispatch, SetStateAction } from 'react';
import styles from './select.module.scss';

type Props = {
  /**
   * You can set the language to filter the search results by programming language.
   */
  setLang: Dispatch<SetStateAction<string>>;
};

/**
 * @summary It's a select tag for choosing your preferred language.
 *
 * @description
 * The types of languages will likely increase, but it currently covers all the languages that
 * can be used to filter searches on GitHub.
 *
 * @param {Props}
 * @returns the component.
 */
const Select = ({ setLang }: Props) => (
  <select className={styles.select} onChange={(e) => setLang(e.target.value)}>
    <option value="">-- Select a language --</option>
    <option value="Bash">Bash</option>
    <option value="C">C</option>
    <option value="C#">C#</option>
    <option value="C++">C++</option>
    <option value="CodeQL">CodeQL</option>
    <option value="Elixir">Elixir</option>
    <option value="Go">Go</option>
    <option value="JSX">JSX</option>
    <option value="Java">Java</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Lua">Lua</option>
    <option value="PHP">PHP</option>
    <option value="Python">Python</option>
    <option value="R">R</option>
    <option value="Ruby">Ruby</option>
    <option value="Rust">Rust</option>
    <option value="Scala">Scala</option>
    <option value="Starlark">Starlark</option>
    <option value="Swift">Swift</option>
    <option value="TypeScript">TypeScript</option>
  </select>
);

export default Select;
