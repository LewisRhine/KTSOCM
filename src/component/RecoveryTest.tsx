const RecoveryTest = () => {
  return (
    <>
      <p className={'title is-4'}>Pain is transitory, yet Honour is eternal.</p>
      <p className={'subtitle is-6'}>
        "To cleanse the soul; prayer. To cleanse the body; pain."
        <br />- The Book of the Ordinator
      </p>
      <p className={'is-family-secondary has-text-weight-semibold'}>
        At the end of each battle, operatives will attempt to recover from their
        injuries and prepare themselves for the next fight. All operatives
        recuperate wounds lost during the battle (excluding those that are
        Slain), and are no longer considered injured.
      </p>
      <br />
      <p className={'is-family-secondary has-text-weight-semibold'}>
        A Recovery test must be taken for each operative on your dataslate that
        has a Battle Scar. To do so, roll one D6, adding 1 to the result for
        each consecutive battle in which that operative was not selected for
        deployment (known as ‘Rested’). On a 5+, the test is passed: remove one
        Battle Scar that operative gained from a previous battle (you cannot
        remove a Battle Scar that the operative gained from the same battle).
      </p>
    </>
  )
}

export default RecoveryTest
