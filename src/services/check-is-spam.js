const checkIsSpam = (text) => {
  const { status: spfStatus } = receipt.spfVerdict;
  const { status: dkimStatus } = receipt.dkimVerdict;
  const { status: spamStatus } = receipt.spamVerdict;
  const { status: virusStatus } = receipt.virusVerdict;

  return spfStatus === 'FAIL' || dkimStatus === 'FAIL' || spamStatus === 'FAIL' || virusStatus === 'FAIL';
}