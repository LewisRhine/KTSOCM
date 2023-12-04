const CasualtyCheck = () => {
  return (
    <>
      <p>
        At the end of each battle, a Casualty test must be taken for each
        friendly operative that was incapacitated in that battle. To do so, roll
        one D6: on a 2+, the test is passed, but that operative can gain no more
        than 3XP from that battle. On a 1, the test is failed, and that
        operative gains a Battle Scar.
      </p>
      <p>
        For each friendly MEDIC operative that was selected for deployment, so
        long as it was not incapacitated during that battle, you can re-roll one
        Casualty test after the battle.
      </p>
    </>
  )
}

export default CasualtyCheck
