import React, { useState } from "react";
import "./Over.css";
import Over from "./Over";
import Score from "./Score";
import Handicape from "./Handicape";

const Result = props => {
  const [homeTeam, setHomeTeam] = useState("Los Angeles Clippers (Maisie)");
  const [awayTeam, setAwayTeam] = useState("Los Angeles Clippers (Maisie)");
  const [totalScore, setTotalScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [handicape, setHandicape] = useState(0);
  const [firstQuarterScore, setFirstQuarterScore] = useState(0);
  const [secondQuarterScore, setSecondQuarterScore] = useState(0);
  const [thirdQuarterScore, setThirdQuarterScore] = useState(0);
  const [fourthQuarterScore, setFourthQuarterScore] = useState(0);

  return (
    <div>
      <div className="input">
        <h1>Get Result</h1>
        <form>
          <label>
            Home Team:
            <select
              value={homeTeam}
              onChange={e => setHomeTeam(e.target.value)}
            >
              <option value="Los Angeles Clippers (Maisie)">
                Los Angeles Clippers (Maisie)
              </option>
              <option value="Голден Стейт Ворріорз (Саллі)">
                Голден Стейт Ворріорз (Саллі)
              </option>
              <option value="Мемфіс Гріззліс (Sally)">
                Мемфіс Гріззліс (Sally)
              </option>
              <option value="Маямі Хіт (Janna)">Маямі Хіт (Janna)</option>
              <option value="Денвер Наггетс (Sunshine)">
                Денвер Наггетс (Sunshine)
              </option>
              <option value="Денвер Наггетс (Dream)">
                Денвер Наггетс (Dream)
              </option>
              <option value="Мілуокі Бакс (Хейлі)">Мілуокі Бакс (Хейлі)</option>
              <option value="Міннесота Тімбервулвз (Sally)">
                Міннесота Тімбервулвз (Sally)
              </option>
              <option value="Чикаго Буллз (Белла)">Чикаго Буллз (Белла)</option>
              <option value="Атланта Гокс (Sunshine)">
                Атланта Гокс (Sunshine)
              </option>
              <option value="Сакраменто Кінгз (Darling)">
                Сакраменто Кінгз (Darling)
              </option>
              <option value="Denver Nuggets (Bunny)">
                Denver Nuggets (Bunny)
              </option>
              <option value="Бостон Селтікс (Lulu)">
                Бостон Селтікс (Lulu)
              </option>
              <option value="Атланта Гокс (Dream)">Атланта Гокс (Dream)</option>
              <option value="Чикаго Буллз (Lulu)">Чикаго Буллз (Lulu)</option>
              <option value="Міннесота Тімбервулвз (Поттер)">
                Міннесота Тімбервулвз (Поттер)
              </option>
              <option value="Лос-Анджелес Лейкерс (Doll)">
                Лос-Анджелес Лейкерс (Doll)
              </option>
              <option value="Бруклін Нетс (Люсі)">Бруклін Нетс (Люсі)</option>
              <option value="Мілуокі Бакс (Elsa)">Мілуокі Бакс (Elsa)</option>
              <option value="Бруклін Нетс (Elsa)">Бруклін Нетс (Elsa)</option>
              <option value="Клівленд Кавальєрс (Doll)">
                Клівленд Кавальєрс (Doll)
              </option>
              <option value="Маямі Хіт (Maisie)">Маямі Хіт (Maisie)</option>
              <option value="Філадельфія 76ерс (Potter)">
                Філадельфія 76ерс (Potter)
              </option>
              <option value="Даллас Маверікс (Lucy)">
                Даллас Маверікс (Lucy)
              </option>
              <option value="Нью-Орлеан Пеліканс (Darling)">
                Нью-Орлеан Пеліканс (Darling)
              </option>
              <option value="Даллас Маверікс (Elsa)">
                Даллас Маверікс (Elsa)
              </option>
              <option value="Бостон Селтікс (Белла)">
                Бостон Селтікс (Белла)
              </option>
              <option value="Клівленд Кавальєрс (Milana)">
                Клівленд Кавальєрс (Milana)
              </option>
              <option value="Лос-Анджелес Кліпперс (Джанна)">
                Лос-Анджелес Кліпперс (Джанна)
              </option>
              <option value="Лос-Анджелес Лейкерс (Мілана)">
                Лос-Анджелес Лейкерс (Мілана)
              </option>
              <option value="Memphis Grizzlies (Bunny)">
                Memphis Grizzlies (Bunny)
              </option>
              <option value="Фенікс Санз (Хейлі)">Фенікс Санз (Хейлі)</option>
              <option value="Фенікс Санз (Maisie)">Фенікс Санз (Maisie)</option>
            </select>
            Home score:
            <select
              value={homeScore}
              onChange={e => setHomeScore(e.target.value)}
            >
              <option value="118.5">118.5</option>
              <option value="117.5">117.5</option>
              <option value="116.5">116.5</option>
              <option value="115.5">115.5</option>
              <option value="114.5">114.5</option>
              <option value="113.5">113.5</option>
              <option value="112.5">112.5</option>
              <option value="111.5">111.5</option>
              <option value="110.5">110.5</option>
              <option value="109.5">109.5</option>
              <option value="108.5">108.5</option>
              <option value="107.5">107.5</option>
              <option value="106.5">106.5</option>
              <option value="105.5">105.5</option>
              <option value="104.5">104.5</option>
              <option value="103.5">103.5</option>
              <option value="102.5">102.5</option>
              <option value="101.5">101.5</option>
              <option value="100.5">100.5</option>
              <option value="99.5">99.5</option>
              <option value="98.5">98.5</option>
              <option value="97.5">97.5</option>
              <option value="96.5">96.5</option>
              <option value="95.5">95.5</option>
              <option value="94.5">94.5</option>
              <option value="93.5">93.5</option>
              <option value="92.5">92.5</option>
              <option value="91.5">91.5</option>
              <option value="90.5">90.5</option>
              <option value="89.5">89.5</option>
              <option value="88.5">88.5</option>
              <option value="87.5">87.5</option>
              <option value="86.5">86.5</option>
              <option value="85.5">85.5</option>
              <option value="84.5">84.5</option>
              <option value="83.5">83.5</option>
              <option value="82.5">82.5</option>
              <option value="81.5">81.5</option>
              <option value="80.5">80.5</option>
              <option value="79.5">79.5</option>
              <option value="78.5">78.5</option>
              <option value="77.5">77.5</option>
              <option value="76.5">76.5</option>
              <option value="75.5">75.5</option>
              <option value="74.5">74.5</option>
              <option value="73.5">73.5</option>
              <option value="72.5">72.5</option>
              <option value="71.5">71.5</option>
              <option value="70.5">70.5</option>
              <option value="69.5">69.5</option>
              <option value="68.5">68.5</option>
              <option value="67.5">67.5</option>
              <option value="66.5">66.5</option>
              <option value="65.5">65.5</option>
              <option value="64.5">64.5</option>
              <option value="63.5">63.5</option>
              <option value="62.5">62.5</option>
              <option value="61.5">61.5</option>
              <option value="60.5">60.5</option>
              <option value="59.5">59.5</option>
              <option value="58.5">58.5</option>
              <option value="57.5">57.5</option>
              <option value="56.5">56.5</option>
              <option value="55.5">55.5</option>
              <option value="54.5">54.5</option>
              <option value="53.5">53.5</option>
              <option value="52.5">52.5</option>
              <option value="51.5">51.5</option>
              <option value="50.5">50.5</option>
              <option value="49.5">49.5</option>
              <option value="48.5">48.5</option>
              <option value="47.5">47.5</option>
              <option value="46.5">46.5</option>
              <option value="45.5">45.5</option>
              <option value="44.5">44.5</option>
              <option value="43.5">43.5</option>
              <option value="42.5">42.5</option>
              <option value="41.5">41.5</option>
              <option value="40.5">40.5</option>
            </select>
          </label>
        </form>
        <form>
          <label>
            Away Team:
            <select
              value={awayTeam}
              onChange={e => setAwayTeam(e.target.value)}
            >
              <option value="Los Angeles Clippers (Maisie)">
                Los Angeles Clippers (Maisie)
              </option>
              <option value="Голден Стейт Ворріорз (Саллі)">
                Голден Стейт Ворріорз (Саллі)
              </option>
              <option value="Мемфіс Гріззліс (Sally)">
                Мемфіс Гріззліс (Sally)
              </option>
              <option value="Маямі Хіт (Janna)">Маямі Хіт (Janna)</option>
              <option value="Денвер Наггетс (Sunshine)">
                Денвер Наггетс (Sunshine)
              </option>
              <option value="Денвер Наггетс (Dream)">
                Денвер Наггетс (Dream)
              </option>
              <option value="Мілуокі Бакс (Хейлі)">Мілуокі Бакс (Хейлі)</option>
              <option value="Міннесота Тімбервулвз (Sally)">
                Міннесота Тімбервулвз (Sally)
              </option>
              <option value="Чикаго Буллз (Белла)">Чикаго Буллз (Белла)</option>
              <option value="Атланта Гокс (Sunshine)">
                Атланта Гокс (Sunshine)
              </option>
              <option value="Сакраменто Кінгз (Darling)">
                Сакраменто Кінгз (Darling)
              </option>
              <option value="Denver Nuggets (Bunny)">
                Denver Nuggets (Bunny)
              </option>
              <option value="Бостон Селтікс (Lulu)">
                Бостон Селтікс (Lulu)
              </option>
              <option value="Атланта Гокс (Dream)">Атланта Гокс (Dream)</option>
              <option value="Чикаго Буллз (Lulu)">Чикаго Буллз (Lulu)</option>
              <option value="Міннесота Тімбервулвз (Поттер)">
                Міннесота Тімбервулвз (Поттер)
              </option>
              <option value="Лос-Анджелес Лейкерс (Doll)">
                Лос-Анджелес Лейкерс (Doll)
              </option>
              <option value="Бруклін Нетс (Люсі)">Бруклін Нетс (Люсі)</option>
              <option value="Мілуокі Бакс (Elsa)">Мілуокі Бакс (Elsa)</option>
              <option value="Бруклін Нетс (Elsa)">Бруклін Нетс (Elsa)</option>
              <option value="Клівленд Кавальєрс (Doll)">
                Клівленд Кавальєрс (Doll)
              </option>
              <option value="Маямі Хіт (Maisie)">Маямі Хіт (Maisie)</option>
              <option value="Філадельфія 76ерс (Potter)">
                Філадельфія 76ерс (Potter)
              </option>
              <option value="Даллас Маверікс (Lucy)">
                Даллас Маверікс (Lucy)
              </option>
              <option value="Нью-Орлеан Пеліканс (Darling)">
                Нью-Орлеан Пеліканс (Darling)
              </option>
              <option value="Даллас Маверікс (Elsa)">
                Даллас Маверікс (Elsa)
              </option>
              <option value="Бостон Селтікс (Белла)">
                Бостон Селтікс (Белла)
              </option>
              <option value="Клівленд Кавальєрс (Milana)">
                Клівленд Кавальєрс (Milana)
              </option>
              <option value="Лос-Анджелес Кліпперс (Джанна)">
                Лос-Анджелес Кліпперс (Джанна)
              </option>
              <option value="Лос-Анджелес Лейкерс (Мілана)">
                Лос-Анджелес Лейкерс (Мілана)
              </option>
              <option value="Memphis Grizzlies (Bunny)">
                Memphis Grizzlies (Bunny)
              </option>
              <option value="Фенікс Санз (Хейлі)">Фенікс Санз (Хейлі)</option>
              <option value="Фенікс Санз (Maisie)">Фенікс Санз (Maisie)</option>
            </select>
            Away score:
            <select
              value={awayScore}
              onChange={e => setAwayScore(e.target.value)}
            >
              <option value="118.5">118.5</option>
              <option value="117.5">117.5</option>
              <option value="116.5">116.5</option>
              <option value="115.5">115.5</option>
              <option value="114.5">114.5</option>
              <option value="113.5">113.5</option>
              <option value="112.5">112.5</option>
              <option value="111.5">111.5</option>
              <option value="110.5">110.5</option>
              <option value="109.5">109.5</option>
              <option value="108.5">108.5</option>
              <option value="107.5">107.5</option>
              <option value="106.5">106.5</option>
              <option value="105.5">105.5</option>
              <option value="104.5">104.5</option>
              <option value="103.5">103.5</option>
              <option value="102.5">102.5</option>
              <option value="101.5">101.5</option>
              <option value="100.5">100.5</option>
              <option value="99.5">99.5</option>
              <option value="98.5">98.5</option>
              <option value="97.5">97.5</option>
              <option value="96.5">96.5</option>
              <option value="95.5">95.5</option>
              <option value="94.5">94.5</option>
              <option value="93.5">93.5</option>
              <option value="92.5">92.5</option>
              <option value="91.5">91.5</option>
              <option value="90.5">90.5</option>
              <option value="89.5">89.5</option>
              <option value="88.5">88.5</option>
              <option value="87.5">87.5</option>
              <option value="86.5">86.5</option>
              <option value="85.5">85.5</option>
              <option value="84.5">84.5</option>
              <option value="83.5">83.5</option>
              <option value="82.5">82.5</option>
              <option value="81.5">81.5</option>
              <option value="80.5">80.5</option>
              <option value="79.5">79.5</option>
              <option value="78.5">78.5</option>
              <option value="77.5">77.5</option>
              <option value="76.5">76.5</option>
              <option value="75.5">75.5</option>
              <option value="74.5">74.5</option>
              <option value="73.5">73.5</option>
              <option value="72.5">72.5</option>
              <option value="71.5">71.5</option>
              <option value="70.5">70.5</option>
              <option value="69.5">69.5</option>
              <option value="68.5">68.5</option>
              <option value="67.5">67.5</option>
              <option value="66.5">66.5</option>
              <option value="65.5">65.5</option>
              <option value="64.5">64.5</option>
              <option value="63.5">63.5</option>
              <option value="62.5">62.5</option>
              <option value="61.5">61.5</option>
              <option value="60.5">60.5</option>
              <option value="59.5">59.5</option>
              <option value="58.5">58.5</option>
              <option value="57.5">57.5</option>
              <option value="56.5">56.5</option>
              <option value="55.5">55.5</option>
              <option value="54.5">54.5</option>
              <option value="53.5">53.5</option>
              <option value="52.5">52.5</option>
              <option value="51.5">51.5</option>
              <option value="50.5">50.5</option>
              <option value="49.5">49.5</option>
              <option value="48.5">48.5</option>
              <option value="47.5">47.5</option>
              <option value="46.5">46.5</option>
              <option value="45.5">45.5</option>
              <option value="44.5">44.5</option>
              <option value="43.5">43.5</option>
              <option value="42.5">42.5</option>
              <option value="41.5">41.5</option>
              <option value="40.5">40.5</option>
            </select>
            <p />
            Handicap:
            <select
              value={handicape}
              onChange={e => setHandicape(e.target.value)}
            >
              <option value="-50.5">-50.5</option>
              <option value="-49.5">-49.5</option>
              <option value="-48.5">-48.5</option>
              <option value="-47.5">-47.5</option>
              <option value="-46.5">-46.5</option>
              <option value="-45.5">-45.5</option>
              <option value="-44.5">-44.5</option>
              <option value="-43.5">-43.5</option>
              <option value="-42.5">-42.5</option>
              <option value="-41.5">-41.5</option>
              <option value="-40.5">-40.5</option>
              <option value="-39.5">-39.5</option>
              <option value="-38.5">-38.5</option>
              <option value="-37.5">-37.5</option>
              <option value="-36.5">-36.5</option>
              <option value="-35.5">-35.5</option>
              <option value="-34.5">-34.5</option>
              <option value="-33.5">-33.5</option>
              <option value="-32.5">-32.5</option>
              <option value="-31.5">-31.5</option>
              <option value="-30.5">-30.5</option>
              <option value="-29.5">-29.5</option>
              <option value="-28.5">-28.5</option>
              <option value="-27.5">-27.5</option>
              <option value="-26.5">-26.5</option>
              <option value="-25.5">-25.5</option>
              <option value="-24.5">-24.5</option>
              <option value="-23.5">-23.5</option>
              <option value="-22.5">-22.5</option>
              <option value="-21.5">-21.5</option>
              <option value="-20.5">-20.5</option>
              <option value="-19.5">-19.5</option>
              <option value="-18.5">-18.5</option>
              <option value="-17.5">-17.5</option>
              <option value="-16.5">-16.5</option>
              <option value="-15.5">-15.5</option>
              <option value="-14.5">-14.5</option>
              <option value="-13.5">-13.5</option>
              <option value="-12.5">-12.5</option>
              <option value="-11.5">-11.5</option>
              <option value="-10.5">-10.5</option>
              <option value="-9.5">-9.5</option>
              <option value="-8.5">-8.5</option>
              <option value="-7.5">-7.5</option>
              <option value="-6.5">-6.5</option>
              <option value="-5.5">-5.5</option>
              <option value="-4.5">-4.5</option>
              <option value="-3.5">-3.5</option>
              <option value="-2.5">-2.5</option>
              <option value="-1.5">-1.5</option>
              <option value="-0.5">-0.5</option>
              <option value="0.5">0.5</option>
              <option value="1.5">1.5</option>
              <option value="2.5">2.5</option>
              <option value="3.5">3.5</option>
              <option value="4.5">4.5</option>
              <option value="5.5">5.5</option>
              <option value="6.5">6.5</option>
              <option value="7.5">7.5</option>
              <option value="8.5">8.5</option>
              <option value="9.5">9.5</option>
              <option value="10.5">10.5</option>
              <option value="11.5">11.5</option>
              <option value="12.5">12.5</option>
              <option value="13.5">13.5</option>
              <option value="14.5">14.5</option>
              <option value="15.5">15.5</option>
              <option value="16.5">16.5</option>
              <option value="17.5">17.5</option>
              <option value="18.5">18.5</option>
              <option value="19.5">19.5</option>
              <option value="20.5">20.5</option>
              <option value="21.5">21.5</option>
              <option value="22.5">22.5</option>
              <option value="23.5">23.5</option>
              <option value="24.5">24.5</option>
              <option value="25.5">25.5</option>
              <option value="26.5">26.5</option>
              <option value="27.5">27.5</option>
              <option value="28.5">28.5</option>
              <option value="29.5">29.5</option>
              <option value="30.5">30.5</option>
              <option value="31.5">31.5</option>
              <option value="32.5">32.5</option>
              <option value="33.5">33.5</option>
              <option value="34.5">34.5</option>
              <option value="35.5">35.5</option>
              <option value="36.5">36.5</option>
              <option value="37.5">37.5</option>
              <option value="38.5">38.5</option>
              <option value="39.5">39.5</option>
              <option value="40.5">40.5</option>
              <option value="41.5">41.5</option>
              <option value="42.5">42.5</option>
              <option value="43.5">43.5</option>
              <option value="44.5">44.5</option>
              <option value="45.5">45.5</option>
              <option value="46.5">46.5</option>
              <option value="47.5">47.5</option>
              <option value="48.5">48.5</option>
              <option value="49.5">49.5</option>
              <option value="50.5">50.5</option>
            </select>
            <p />
            Total score:
            <select
              value={totalScore}
              onChange={e => setTotalScore(e.target.value)}
            >
              <option value="200.5">200.5</option>
              <option value="199.5">199.5</option>
              <option value="198.5">198.5</option>
              <option value="197.5">197.5</option>
              <option value="196.5">196.5</option>
              <option value="195.5">195.5</option>
              <option value="194.5">194.5</option>
              <option value="193.5">193.5</option>
              <option value="192.5">192.5</option>
              <option value="191.5">191.5</option>
              <option value="190.5">190.5</option>
              <option value="189.5">189.5</option>
              <option value="188.5">188.5</option>
              <option value="187.5">187.5</option>
              <option value="186.5">186.5</option>
              <option value="185.5">185.5</option>
              <option value="184.5">184.5</option>
              <option value="183.5">183.5</option>
              <option value="182.5">182.5</option>
              <option value="181.5">181.5</option>
              <option value="180.5">180.5</option>
              <option value="179.5">179.5</option>
              <option value="178.5">178.5</option>
              <option value="177.5">177.5</option>
              <option value="176.5">176.5</option>
              <option value="175.5">175.5</option>
              <option value="174.5">174.5</option>
              <option value="173.5">173.5</option>
              <option value="172.5">172.5</option>
              <option value="171.5">171.5</option>
              <option value="170.5">170.5</option>
              <option value="169.5">169.5</option>
              <option value="168.5">168.5</option>
              <option value="167.5">167.5</option>
              <option value="166.5">166.5</option>
              <option value="165.5">165.5</option>
              <option value="164.5">164.5</option>
              <option value="163.5">163.5</option>
              <option value="162.5">162.5</option>
              <option value="161.5">161.5</option>
              <option value="160.5">160.5</option>
              <option value="159.5">159.5</option>
              <option value="158.5">158.5</option>
              <option value="157.5">157.5</option>
              <option value="156.5">156.5</option>
              <option value="155.5">155.5</option>
              <option value="154.5">154.5</option>
              <option value="153.5">153.5</option>
              <option value="152.5">152.5</option>
              <option value="151.5">151.5</option>
              <option value="150.5">150.5</option>
              <option value="149.5">149.5</option>
              <option value="148.5">148.5</option>
              <option value="147.5">147.5</option>
              <option value="146.5">146.5</option>
              <option value="145.5">145.5</option>
              <option value="144.5">144.5</option>
              <option value="143.5">143.5</option>
              <option value="142.5">142.5</option>
              <option value="141.5">141.5</option>
              <option value="140.5">140.5</option>
              <option value="139.5">139.5</option>
              <option value="138.5">138.5</option>
              <option value="137.5">137.5</option>
              <option value="136.5">136.5</option>
              <option value="135.5">135.5</option>
              <option value="134.5">134.5</option>
              <option value="133.5">133.5</option>
              <option value="132.5">132.5</option>
              <option value="131.5">131.5</option>
              <option value="130.5">130.5</option>
              <option value="129.5">129.5</option>
              <option value="128.5">128.5</option>
              <option value="127.5">127.5</option>
              <option value="126.5">126.5</option>
              <option value="125.5">125.5</option>
              <option value="124.5">124.5</option>
              <option value="123.5">123.5</option>
              <option value="122.5">122.5</option>
              <option value="121.5">121.5</option>
              <option value="120.5">120.5</option>
              <option value="119.5">119.5</option>
              <option value="118.5">118.5</option>
              <option value="117.5">117.5</option>
              <option value="116.5">116.5</option>
              <option value="115.5">115.5</option>
              <option value="114.5">114.5</option>
              <option value="113.5">113.5</option>
              <option value="112.5">112.5</option>
              <option value="111.5">111.5</option>
              <option value="110.5">110.5</option>
              <option value="109.5">109.5</option>
              <option value="108.5">108.5</option>
              <option value="107.5">107.5</option>
              <option value="106.5">106.5</option>
              <option value="105.5">105.5</option>
              <option value="104.5">104.5</option>
              <option value="103.5">103.5</option>
              <option value="102.5">102.5</option>
              <option value="101.5">101.5</option>
              <option value="100.5">100.5</option>
            </select>
          </label>
        </form>

        <form>
          First score:
          <select
            value={firstQuarterScore}
            onChange={e => setFirstQuarterScore(e.target.value)}
          >
            <option value="55.5">55.5</option>
            <option value="54.5">54.5</option>
            <option value="53.5">53.5</option>
            <option value="52.5">52.5</option>
            <option value="51.5">51.5</option>
            <option value="50.5">50.5</option>
            <option value="49.5">49.5</option>
            <option value="48.5">48.5</option>
            <option value="47.5">47.5</option>
            <option value="46.5">46.5</option>
            <option value="45.5">45.5</option>
            <option value="44.5">44.5</option>
            <option value="43.5">43.5</option>
            <option value="42.5">42.5</option>
            <option value="41.5">41.5</option>
            <option value="40.5">40.5</option>
            <option value="39.5">39.5</option>
            <option value="38.5">38.5</option>
            <option value="37.5">37.5</option>
            <option value="36.5">36.5</option>
            <option value="35.5">35.5</option>
            <option value="34.5">34.5</option>
            <option value="33.5">33.5</option>
            <option value="32.5">32.5</option>
            <option value="31.5">31.5</option>
            <option value="30.5">30.5</option>
            <option value="29.5">29.5</option>
            <option value="28.5">28.5</option>
            <option value="27.5">27.5</option>
            <option value="26.5">26.5</option>
            <option value="25.5">25.5</option>
            <option value="24.5">24.5</option>
          </select>
          Second score:
          <select
            value={secondQuarterScore}
            onChange={e => setSecondQuarterScore(e.target.value)}
          >
            <option value="55.5">55.5</option>
            <option value="54.5">54.5</option>
            <option value="53.5">53.5</option>
            <option value="52.5">52.5</option>
            <option value="51.5">51.5</option>
            <option value="50.5">50.5</option>
            <option value="49.5">49.5</option>
            <option value="48.5">48.5</option>
            <option value="47.5">47.5</option>
            <option value="46.5">46.5</option>
            <option value="45.5">45.5</option>
            <option value="44.5">44.5</option>
            <option value="43.5">43.5</option>
            <option value="42.5">42.5</option>
            <option value="41.5">41.5</option>
            <option value="40.5">40.5</option>
            <option value="39.5">39.5</option>
            <option value="38.5">38.5</option>
            <option value="37.5">37.5</option>
            <option value="36.5">36.5</option>
            <option value="35.5">35.5</option>
            <option value="34.5">34.5</option>
            <option value="33.5">33.5</option>
            <option value="32.5">32.5</option>
            <option value="31.5">31.5</option>
            <option value="30.5">30.5</option>
            <option value="29.5">29.5</option>
            <option value="28.5">28.5</option>
            <option value="27.5">27.5</option>
            <option value="26.5">26.5</option>
            <option value="25.5">25.5</option>
            <option value="24.5">24.5</option>
          </select>
          Three score:
          <select
            value={thirdQuarterScore}
            onChange={e => setThirdQuarterScore(e.target.value)}
          >
            <option value="55.5">55.5</option>
            <option value="54.5">54.5</option>
            <option value="53.5">53.5</option>
            <option value="52.5">52.5</option>
            <option value="51.5">51.5</option>
            <option value="50.5">50.5</option>
            <option value="49.5">49.5</option>
            <option value="48.5">48.5</option>
            <option value="47.5">47.5</option>
            <option value="46.5">46.5</option>
            <option value="45.5">45.5</option>
            <option value="44.5">44.5</option>
            <option value="43.5">43.5</option>
            <option value="42.5">42.5</option>
            <option value="41.5">41.5</option>
            <option value="40.5">40.5</option>
            <option value="39.5">39.5</option>
            <option value="38.5">38.5</option>
            <option value="37.5">37.5</option>
            <option value="36.5">36.5</option>
            <option value="35.5">35.5</option>
            <option value="34.5">34.5</option>
            <option value="33.5">33.5</option>
            <option value="32.5">32.5</option>
            <option value="31.5">31.5</option>
            <option value="30.5">30.5</option>
            <option value="29.5">29.5</option>
            <option value="28.5">28.5</option>
            <option value="27.5">27.5</option>
            <option value="26.5">26.5</option>
            <option value="25.5">25.5</option>
            <option value="24.5">24.5</option>
          </select>
          Four score:
          <select
            value={fourthQuarterScore}
            onChange={e => setFourthQuarterScore(e.target.value)}
          >
            <option value="55.5">55.5</option>
            <option value="54.5">54.5</option>
            <option value="53.5">53.5</option>
            <option value="52.5">52.5</option>
            <option value="51.5">51.5</option>
            <option value="50.5">50.5</option>
            <option value="49.5">49.5</option>
            <option value="48.5">48.5</option>
            <option value="47.5">47.5</option>
            <option value="46.5">46.5</option>
            <option value="45.5">45.5</option>
            <option value="44.5">44.5</option>
            <option value="43.5">43.5</option>
            <option value="42.5">42.5</option>
            <option value="41.5">41.5</option>
            <option value="40.5">40.5</option>
            <option value="39.5">39.5</option>
            <option value="38.5">38.5</option>
            <option value="37.5">37.5</option>
            <option value="36.5">36.5</option>
            <option value="35.5">35.5</option>
            <option value="34.5">34.5</option>
            <option value="33.5">33.5</option>
            <option value="32.5">32.5</option>
            <option value="31.5">31.5</option>
            <option value="30.5">30.5</option>
            <option value="29.5">29.5</option>
            <option value="28.5">28.5</option>
            <option value="27.5">27.5</option>
            <option value="26.5">26.5</option>
            <option value="25.5">25.5</option>
            <option value="24.5">24.5</option>
          </select>
        </form>

        <button
          onClick={() =>
            props.getResult({
              homeTeam,
              awayTeam,
              totalScore,
              homeScore,
              awayScore,
              handicape,
              firstQuarterScore,
              secondQuarterScore,
              thirdQuarterScore,
              fourthQuarterScore
            })
          }
        >
          check game
        </button>
        <p />
      </div>
      <div className="score">
        <Score name={homeTeam} percent={props.games.percentHome} />
        <Score name={awayTeam} percent={props.games.percentAway} />
      </div>
      <p />
      <p />
      <div className="score">
        Handicape
        <Handicape handicape={handicape} percent={props.games.handicape} />
      </div>
      <p />
      <p />
      <div className="score">
        Total score
        <Over totalScore={totalScore} score={props.games.averageTotal} />
      </div>

      <div className="score">
        <p />
        <p />
      </div>
      <div className="over">
        First Quarter
        <Over totalScore={firstQuarterScore} score={props.games.firstQuart} />
      </div>
      <div className="over">
        Second Quarter
        <Over totalScore={secondQuarterScore} score={props.games.secondQuart} />
      </div>
      <div className="over">
        Three Quarter
        <Over totalScore={thirdQuarterScore} score={props.games.threeQuart} />
      </div>
      <div className="over">
        Four Quarter
        <Over totalScore={fourthQuarterScore} score={props.games.fourQuart} />
      </div>
      {
        //setInterval(props.getResult({ homeTeam, awayTeam, totalScore, homeScore, awayScore, handicape }, 3000))
      }
    </div>
  );
};

export default Result;
