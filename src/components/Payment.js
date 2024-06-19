export function Payment({ bill, tip }) {
  return (
    <div>
      <h2>
        {tip > 0
          ? `You pay ${bill + tip}€ (${bill}€ + ${tip}€)`
          : `You pay ${bill}€`}
      </h2>
    </div>
  );
}
