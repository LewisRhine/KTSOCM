const RecoveryTest = () => {
  return (
    <>
      <div>
        <h1>
          <b>
            "Pain is transitory, yet Honour is eternal."
            <br /> "To cleanse the soul; prayer. To cleanse the body; pain."{' '}
            <br />- The Book of the Ordinator
          </b>
        </h1>
        <br />
      </div>
      <div>
        <p>
          At the end of each battle, operatives will attempt to recover from
          their injuries and prepare themselves for the next fight. All
          operatives recuperate wounds lost during the battle (excluding those
          that are Slain), and are no longer considered injured.
        </p>
        <p>
          A Recovery test must be taken for each operative on your dataslate
          that has a Battle Scar. To do so, roll one D6, adding 1 to the result
          for each consecutive battle in which that operative was not selected
          for deployment (known as ‘Rested’). On a 5+, the test is passed:
          remove one Battle Scar that operative gained from a previous battle
          (you cannot remove a Battle Scar that the operative gained from the
          same battle).
        </p>
      </div>
    </>
  )
}

export default RecoveryTest
