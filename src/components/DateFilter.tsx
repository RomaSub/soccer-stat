import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

interface DateFilterProps {
  onDateChange: (from: string, to: string) => void;
}

const DateFilter = ({ onDateChange }: DateFilterProps) => {
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");

  useEffect(() => {
    if (dateFrom && dateTo) onDateChange(dateFrom, dateTo);
  }, [dateFrom, dateTo, onDateChange]);

  return (
    <Row>
      <Col md={3} className="mb-3">
        <Form.Group>
          <Form.Control
            type="date"
            value={dateFrom}
            onChange={e => setDateFrom(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col md={3} className="mb-3">
        <Form.Group>
          <Form.Control
            type="date"
            value={dateTo}
            onChange={e => setDateTo(e.target.value)}
          />
        </Form.Group>
      </Col>
    </Row>
  );
};

export default DateFilter;
