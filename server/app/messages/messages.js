//Made error fuction to check if data in catch
function not_found_error(res, err) {
  !res.body
    ? res.json({ message: ' Object Id Not found' })
    : res.json({ message: err.message });
}

module.exports = { not_found_error };
