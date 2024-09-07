import React from 'react'
import "./State_Guides.css";


const State_Guides = () => {
  return (
    <div className='main_state_guides' >
      <div className='top_main_hero_section_state_guides'>
        <img src="/img/hero-image-map-compass_usa.jpg" alt="" className='top_State_guides' />
        <p className='image_over_paragraph_state'>
          State Guides
        </p>
      </div>


      <div className='bottom_bar_state_guides'>
        <div className='left_side_state_guides'>
          <p className='paragraph_state_guides'>
            Most of our customers form their new companies in the state where they conduct the majority of their business. Need more state-specific information to decide what's right for your business?
            <b>
              Choose a state from the dropdown for more information.
            </b>
          </p>
        </div>
        <div className='right_side_state_guides'>
          <select name="state" id="state" className='country_state_guide'>
            <option value="" selected="selected" disabled>Select a State</option>
            <option value="alabama">Alabama</option>
            <option value="alaska">Alaska</option><option value="arizona">Arizona</option>
            <option value="arkansas">Arkansas</option>
            <option value="california">California</option>
            <option value="colorado">Colorado</option>
            <option value="connecticut">Connecticut</option>
            <option value="delaware">Delaware</option>
            <option value="district-of-columbia">District of Columbia</option>
            <option value="florida">Florida</option>
            <option value="georgia">Georgia</option>
            <option value="hawaii">Hawaii</option>
            <option value="idaho">Idaho</option>
            <option value="illinois">Illinois</option>
            <option value="indiana">Indiana</option>
            <option value="iowa">Iowa</option>
            <option value="kansas">Kansas</option>
            <option value="kentucky">Kentucky</option>
            <option value="louisiana">Louisiana</option>
            <option value="maine">Maine</option>
            <option value="maryland">Maryland</option>
            <option value="massachusetts">Massachusetts</option>
            <option value="michigan">Michigan</option>
            <option value="minnesota">Minnesota</option>
            <option value="mississippi">Mississippi</option>
            <option value="missouri">Missouri</option>
            <option value="montana">Montana</option>
            <option value="nebraska">Nebraska</option>
            <option value="nevada">Nevada</option>
            <option value="new-hampshire">New Hampshire</option>
            <option value="new-jersey">New Jersey</option>
            <option value="new-mexico">New Mexico</option>
            <option value="new-york">New York</option>
            <option value="north-carolina">North Carolina</option>
            <option value="north-dakota">North Dakota</option>
            <option value="ohio">Ohio</option>
            <option value="oklahoma">Oklahoma</option>
            <option value="oregon">Oregon</option>
            <option value="pennsylvania">Pennsylvania</option>
            <option value="rhode-island">Rhode Island</option>
            <option value="south-carolina">South Carolina</option>
            <option value="south-dakota">South Dakota</option>
            <option value="tennessee">Tennessee</option>
            <option value="texas">Texas</option>
            <option value="utah">Utah</option>
            <option value="vermont">Vermont</option>
            <option value="virginia">Virginia</option>
            <option value="washington">Washington</option>
            <option value="west-virginia">West Virginia</option>
            <option value="wisconsin">Wisconsin</option>
            <option value="wyoming">Wyoming</option>
          </select>


          <button className='state_getstarted'>
            Go
          </button>

        </div>
      </div>
    </div>
  )
}

export default State_Guides
