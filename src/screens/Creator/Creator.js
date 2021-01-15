import CustomizationPanel from '../../components/CustomizationPanel';
import PostPreviewer from '../../components/PostPreviewer';
import TemplateList from '../../components/TemplatesList';

import { Container } from './Creator.styles';

const Creator = () => {
  return (
    <Container>
      <CustomizationPanel />
      <PostPreviewer />
      <TemplateList />
    </Container>
  );
};

export default Creator;
